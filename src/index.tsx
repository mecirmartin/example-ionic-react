import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if(!window.__skip_render){ 
  ReactDOM.render(<App />, document.getElementById("root"));
}
