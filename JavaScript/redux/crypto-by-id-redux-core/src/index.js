// redux core dependencies
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

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

// The form elements only render once
document.getElementById("root").innerHTML = App();
