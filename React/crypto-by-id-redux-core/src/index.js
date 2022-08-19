import React from "react";
import ReactDOM from "react-dom";

// redux core dependencies
import { createStore } from "redux";
import { Provider } from "react-redux";
// connect redux to react component.
import { connect } from "react-redux";

const setCryptoIdInput = (cryptoId) => {
  return {
    type: "CRYPTO_ID_INPUT",
    cryptoId,
  };
};

const reducer = (state = { cryptoId: "" }, action) => {
  switch (action.type) {
    case "CRYPTO_ID_INPUT":
      return {
        ...state,
        cryptoId: action.cryptoId,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

function handleCryptoIdInput(cryptoIdInput, setCryptoIdInput) {
  setCryptoIdInput(cryptoIdInput);
}

function mapStateToProps(state) {
  return {
    cryptoId: state.cryptoId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCryptoIdInput: (cryptoId) => {
      dispatch(setCryptoIdInput(cryptoId));
    },
  };
}

function App({ cryptoId, setCryptoIdInput }) {
  return (
    <>
      <h1>Crypto by id</h1>
      <p>{cryptoId}</p>
      <input
        type="text"
        onChange={(e) => {
          handleCryptoIdInput(e.target.value, setCryptoIdInput);
        }}
        value={cryptoId}
      />
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
