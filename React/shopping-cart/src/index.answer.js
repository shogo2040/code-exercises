import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [products, setProducts] = useState();

  function handleQuantity(e, id) {
    const quantity = e.target.value;
    const productsCopy = [...products];
    const updatedProducts = productsCopy.map((product) => {
      if (product.id === id) {
        const subTotal = product.price * quantity;

        return {
          ...product,
          subTotal,
          quantity,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  }
  const total = products && products.reduce((acc, b) => acc + b.subTotal, 0);

  useEffect(async () => {
    const response = await fetch("/products.json");
    const json = await response.json();
    const updatedProducts = json.map((product) => {
      const subTotal = product.price * product.quantity;
      return {
        ...product,
        subTotal,
      };
    });
    setProducts(updatedProducts);
  }, []);

  return (
    <div>
      {products ? (
        <>
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <td>id</td>
                <td>product name</td>
                <td>price</td>
                <td>subtotal</td>
                <td>quantity</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.subTotal}</td>
                    <td>
                      <input
                        onChange={(e) => {
                          handleQuantity(e, product.id);
                        }}
                        type="number"
                        value={product.quantity}
                        min={0}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p>Total: {total}</p>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
