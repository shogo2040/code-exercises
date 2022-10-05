import React, { useState } from "react";
import ReactDOM from "react-dom";

function Slider(props) {
  const { label, id, legend } = props;
  const [sliderVal, setSliderVal] = useState(0);

  function handleChange(e) {
    setSliderVal(e.target.value);
  }

  return (
    <fieldset>
      <legend>{legend}</legend>
      <div
        style={{
          display: "flex",
        }}
      >
        <label for="x">{label}</label>
        <input
          style={{
            width: "100%",
          }}
          id={id}
          type="range"
          min={0}
          max={50}
          onChange={handleChange}
          value={sliderVal}
        />
      </div>
      <strong style={{ display: "block", textAlign: "center" }}>
        {sliderVal}
      </strong>
    </fieldset>
  );
}

function App() {
  return (
    <>
      <h1>React Hook useReducer</h1>
      <h2>Redux without Redux!</h2>
      <Slider id="x" label="X" legend="First Operand" />
      <br />
      <Slider id="y" label="Y" legend="Second Operand" />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
