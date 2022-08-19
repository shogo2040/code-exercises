import React, { useState } from "react";
import ReactDOM from "react-dom";

// redux core dependencies
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// connect redux to react component.
import { connect } from "react-redux";

// actions
const SET_PRICE = "SET_PRICE";

function setPrice(price) {
  return {
    type: SET_PRICE,
    price,
  };
}

// async actions (this is NOT built into redux).
// It was added on with applyMiddleware(thunk)
// redux-thunk is created by the redux team,
// but it was separated it to be optional.

function getCrypto(id) {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
    );
    const json = await response.json();

    dispatch(setPrice(json[id].usd));
  };
}

function reducer(state = {}, action) {
  switch (action.type) {
    case SET_PRICE:
      return {
        ...state,
        price: action.price,
      };
    default:
      return state;
  }
}

// create the store. extend redux to support async actions with the middleware "thunk"
const mapStateToProps = (state) => {
  return {
    price: state.price,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCrypto: (id) => {
      dispatch(getCrypto(id));
    },
    setPrice: () => {
      dispatch(setPrice());
    },
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function CryptoByIdComponent({ price, getCrypto }) {
  const [cryptoId, setCryptoId] = useState("");

  function handlerCryptoId(e) {
    setCryptoId(e.target.value);
  }

  return (
    <>
      <h1>Crypto By Id</h1>
      <input type="text" onChange={handlerCryptoId} />
      <button onClick={() => getCrypto(cryptoId)}>Go</button>
      <h2>Price: {price}</h2>
    </>
  );
}

const CryptoById = connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoByIdComponent);

ReactDOM.render(
  <Provider store={store}>
    <CryptoById />
  </Provider>,
  document.getElementById("root")
);
