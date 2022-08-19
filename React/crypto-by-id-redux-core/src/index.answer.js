import React from "react";
import ReactDOM from "react-dom";

// redux core dependencies
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// connect redux to react component.
import { connect } from "react-redux";

const setCryptoIdInput = (cryptoId) => {
  return {
    type: "CRYPTO_ID_INPUT",
    cryptoId,
  };
};

const setCryptoPrice = (price) => {
  return {
    type: "SET_CRYPTO_PRICE",
    price,
  };
};

const fetchCryptoById = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
    );
    const json = await response.json();
    dispatch(setCryptoPrice(json[id].usd));
  };
};

const reducer = (state = { cryptoId: "" }, action) => {
  switch (action.type) {
    case "CRYPTO_ID_INPUT":
      return {
        ...state,
        cryptoId: action.cryptoId,
      };
    case "SET_CRYPTO_PRICE":
      return {
        ...state,
        price: action.price,
      };
    default:
      return state;
  }
};
const store = createStore(reducer, applyMiddleware(thunk));

function handleCryptoIdInput(cryptoIdInput, setCryptoIdInput) {
  setCryptoIdInput(cryptoIdInput);
}

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
      <p>{price ? `${cryptoId} - ${price}` : null}</p>
      <input
        type="text"
        onChange={(e) => {
          handleCryptoIdInput(e.target.value, setCryptoIdInput);
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
