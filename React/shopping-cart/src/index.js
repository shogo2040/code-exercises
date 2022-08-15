import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [subtotals, setSubtotals] = useState([]);

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/products.json");
    const json = await response.json();
    setProducts(json);
    setSubtotals(json.map((product) => product.quantity * product.price));
  }, []);

  function handleProductQuantity(quantity, productId) {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: parseInt(quantity),
        };
      }

      return product;
    });

    setProducts(updatedProducts);
    setSubtotals(
      updatedProducts.map((product) => product.quantity * product.price)
    );
  }

  return (
    <>
      {products ? (
        <>
          <h1>Shopping Cart</h1>
          <table border="1" cellPadding={5}>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => {
                          console.log(e.target.value);
                          handleProductQuantity(e.target.value, product.id);
                        }}
                      />
                    </td>
                    <td>{subtotals[index]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h1>...loading</h1>
      )}
      {subtotals ? (
        <p>
          Grand Total:{" "}
          <strong>
            {subtotals &&
              subtotals.length > 0 &&
              subtotals.reduce((prev, curr) => prev + curr)}
          </strong>
        </p>
      ) : null}
    </>
  );
}
ReactDOM.render(<ShoppingCart />, document.getElementById("root"));
