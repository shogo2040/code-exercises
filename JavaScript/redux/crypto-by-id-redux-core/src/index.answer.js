// redux core dependencies
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

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

const fetchCryptoById = () => {
  return async (dispatch, getState) => {
    const id = getState().cryptoId;
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
    );
    const json = await response.json();

    if (json && json[id] && json[id].usd) {
      dispatch(setCryptoPrice(json[id].usd));
    }
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
store.subscribe(() => {
  render(store.getState());
});

function handleCryptoIdInput(cryptoIdInput) {
  store.dispatch(setCryptoIdInput(cryptoIdInput));
}

function App() {
  return `<h1>Crypto by id</h1>
      <input
        id="cryptoIdInput"
        type="text"
      />
      <button id="getPriceButton">
        Go
      </button>
      <div id="render"></div>
  `;
}

function subView({ cryptoId, price }) {
  let html = cryptoId ? `<div>${cryptoId}</div>` : ``;
  html += price ? `<div>${price}</div>` : ``;

  return html;
}

// Non form elements can be rendered multiple times.
function render(state) {
  document.getElementById("render").innerHTML = subView(state);
}

// The form elements only render once
document.getElementById("root").innerHTML = App();
document.getElementById("cryptoIdInput").addEventListener("keyup", (e) => {
  handleCryptoIdInput(e.target.value);
});
document.getElementById("getPriceButton").addEventListener("click", () => {
  store.dispatch(fetchCryptoById());
});
