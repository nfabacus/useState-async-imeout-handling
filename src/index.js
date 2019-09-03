import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [loading, setLoading] = useState({});
  const handleOnClick = id => {
    setLoading(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      // simulate the case for when error is returned after an api call.
      setLoading(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="App">
      <h1>React UseState: Updating a state object</h1>
      <p>Solution: Make sure to use prev state when updating state in hooks</p>
      {["1", "2"].map(id => {
        return !loading[id] ? (
          <button key={id} onClick={() => handleOnClick(id)}>
            Item {id}
          </button>
        ) : (
          `Loading...${id}`
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
