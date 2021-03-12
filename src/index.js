import React from 'react';
import ReactDOM from 'react-dom';
import {PdfComponent} from "./components/PdfComponent";

function App() {
  return (
  <PdfComponent/>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
