import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [para, setPara] = useState(true);

  const renderP = () => {
    setPara(false);
  };

  return (
    <>
      <div id="main">// Do not alter the main div</div>
      {para ? (
        ""
      ) : (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
      <button id="click" onClick={renderP}>
        Click me
      </button>
    </>
  );
}


export default App;
