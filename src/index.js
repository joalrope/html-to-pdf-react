import React from "react";
import ReactDOM from "react-dom";
import PdfComponent from "./components/app";
import "./styles.css";

function App() {
  return (
    <div className="App" id="content">
      <section>
        {" "}
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </section>

      <PdfComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
