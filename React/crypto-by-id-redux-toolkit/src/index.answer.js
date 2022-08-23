import React from "react";
import ReactDOM from "react-dom";

// redux toolkit dependencies
import { configureStore, createSlice } from "@reduxjs/toolkit";

// use hooks to connect react to redux.
import { useSelector, useDispatch, Provider } from "react-redux";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    cryptoId: "",
  },
  reducers: {
    // RTK uses Immur Library to take these mutations and rewrite the immutable
    // pure function reducers and spread operators and merging for you
    setCryptoIdInput: (state, action) => {
      state.cryptoId = action.payload;
    },
    setCryptoPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

const { setCryptoIdInput, setCryptoPrice } = cryptoSlice.actions;

const store = configureStore({
  reducer: cryptoSlice.reducer,
});

const fetchCryptoById = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
    );
    const json = await response.json();
    dispatch(setCryptoPrice(json[id].usd));
  };
};

function App() {
  const dispatch = useDispatch();
  const cryptoId = useSelector((state) => state.cryptoId);
  const price = useSelector((state) => state.price);

  return (
    <>
      <h1>Crypto by id - with the new RTK</h1>
      <p>{price ? `${cryptoId} - ${price}` : null}</p>
      <input
        type="text"
        onChange={(e) => {
          dispatch(setCryptoIdInput(e.target.value));
        }}
        value={cryptoId}
      />
      <button
        onClick={() => {
          dispatch(fetchCryptoById(cryptoId));
        }}
      >
        Go
      </button>
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
