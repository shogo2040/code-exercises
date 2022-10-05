import React, { useReducer, useContext, createContext } from "react";
import ReactDOM from "react-dom";

const initialState = { x: 0, y: 0 };
const SharedStateContext = createContext();

function Display() {
  return <h3>{/* {x} + {y} = {Number(x) + Number(y)} */}</h3>;
}

function Slider(props) {
  const { label, id, legend } = props;

  return (
    <fieldset>
      <legend>{legend}</legend>
      <div
        style={{
          display: "flex",
        }}
      >
        <label htmlFor="x">{label}</label>
        <input
          style={{
            width: "100%",
          }}
          id={id}
          type="range"
          min={0}
          max={50}
        />
      </div>
      <strong style={{ display: "block", textAlign: "center" }}></strong>
    </fieldset>
  );
}

function App() {
  const sharedState = {};

  return (
    <>
      <h1>React Hooks useReducer, useContext and createContext</h1>
      <h2>Redux without Redux!</h2>
      <Display />
      <br />
      <Slider id="x" label="X" legend="First Operand" />
      <br />
      <Slider id="y" label="Y" legend="Second Operand" />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
