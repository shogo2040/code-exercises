import React, { useReducer, useContext, createContext } from "react";
import ReactDOM from "react-dom";

const initialState = { x: 0, y: 0 };
const SharedStateContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SET_X": {
      return {
        ...state,
        x: action.x,
      };
    }

    case "SET_Y": {
      return {
        ...state,
        y: action.y,
      };
    }

    default: {
      return state;
    }
  }
}

function Display() {
  const { state } = useContext(SharedStateContext);
  const { x, y } = state;

  return (
    <h3>
      {x} + {y} = {Number(x) + Number(y)}
    </h3>
  );
}

function Slider(props) {
  const { label, id, legend } = props;
  const { state, dispatch } = useContext(SharedStateContext);

  function handleChange(e) {
    dispatch({
      type: `SET_${label}`,
      [id]: e.target.value,
    });
  }

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
          onChange={handleChange}
          value={state[id]}
        />
      </div>
      <strong style={{ display: "block", textAlign: "center" }}>
        {state[id]}
      </strong>
    </fieldset>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const sharedState = {
    state,
    dispatch,
  };

  return (
    <SharedStateContext.Provider value={sharedState}>
      <h1>React Hooks useReducer, useContext and createContext</h1>
      <h2>Redux without Redux!</h2>
      <Display />
      <br />
      <Slider id="x" label="X" legend="First Operand" />
      <br />
      <Slider id="y" label="Y" legend="Second Operand" />
    </SharedStateContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
