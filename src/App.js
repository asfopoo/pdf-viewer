import React from "react";

import SinglePagePDFViewer from "./components/pdf/single-page";
import { sampleBase64pdf } from "./sampleBase64pdf";
// example found at https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
// sandbox found at https://codesandbox.io/s/displaying-pdf-using-react-5d003?from-embed

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h4>Base 64 Single Page</h4>
      <SinglePagePDFViewer pdf={sampleBase64pdf} />
    </div>
  );
}
