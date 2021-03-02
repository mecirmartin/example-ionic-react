import * as React from "react";
import * as ReactDOM from "react-dom";
import * as CapacitorCore from "@capacitor/core";
import * as IonicReact from "@ionic/react";
import * as IonicReactRouter from "@ionic/react-router";
import * as IonIcons from "ionicons";
import * as ReactRouter from "react-router";
import * as ReactRouterDom from "react-router-dom";
import * as Reselect from "reselect";

import App from "./App";

const dependencies = {
  "@capacitor": { core: CapacitorCore },
  "@ionic": { react: IonicReact, "react-router": IonicReactRouter },
  ionicons: IonIcons,
  react: React,
  "react-dom": ReactDOM,
  "react-router": ReactRouter,
  "react-router-dom": ReactRouterDom,
  reselect: Reselect,
};

//@ts-ignore
window.__deps = dependencies;

//@ts-ignore
if (!window.__skip_render) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
