import React, { useState } from "react";
import ReactDOM from "react-dom";

function CryptoById() {
  const [cryptoId, setCryptoId] = useState("");
  const [price, setPrice] = useState(0);

  function handlerCryptoId(e) {
    setCryptoId(e.target.value);
  }

  async function getCrypto(id) {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
    );
    const json = await response.json();
    setPrice(json[id].usd);
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
ReactDOM.render(<CryptoById />, document.getElementById("root"));
