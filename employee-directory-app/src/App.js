import React from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Row from "./components/Row/Row";

function App() {
  return (
    <div className="app">
      <div className="info-box">
        <Body>
          <Row />
        </Body>
      </div>
    </div>
  );
}

export default App;
