import React from "react";
import ReactDOM from "react-dom";

// redux toolkit dependencies
import { configureStore, createSlice } from "@reduxjs/toolkit";

// connect react to redux.
import { connect, Provider } from "react-redux";

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

function mapStateToProps(state) {
  return {
    cryptoId: state.cryptoId,
    price: state.price,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCryptoIdInput: (cryptoId) => {
      dispatch(setCryptoIdInput(cryptoId));
    },
    fetchCryptoById: (cryptoId) => {
      dispatch(fetchCryptoById(cryptoId));
    },
  };
}

function App({ cryptoId, setCryptoIdInput, fetchCryptoById, price }) {
  return (
    <>
      <h1>Crypto by id</h1>
      <p>{cryptoId}</p>
      <p>{price ? `${cryptoId} - ${price}` : null}</p>
      <input
        type="text"
        onChange={(e) => {
          setCryptoIdInput(e.target.value);
        }}
        value={cryptoId}
      />
      <button
        onClick={() => {
          fetchCryptoById(cryptoId);
        }}
      >
        Go
      </button>
    </>
  );
}

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  document.getElementById("root")
);
