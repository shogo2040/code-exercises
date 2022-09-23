import React, { useContext, createContext } from "react";
import ReactDOM from "react-dom";

const ThemeContext = createContext();

function ThemedButton() {
  const darkTheme = useContext(ThemeContext);

  return (
    <button
      style={{ background: darkTheme.background, color: darkTheme.color }}
    >
      Themed
    </button>
  );
}

function Article(props) {
  return (
    <article>
      This is the article. <br />
      {props.children}
    </article>
  );
}

function HomePage(props) {
  return <div className="home">{props.children}</div>;
}

function App() {
  const darkTheme = {
    background: "#000",
    color: "#fff",
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <HomePage>
        <Article>
          <ThemedButton />
        </Article>
      </HomePage>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
