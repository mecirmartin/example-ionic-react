import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const loadLocaleData = ( locale:string ) => {
  switch (locale) {
      case 'sk':
      case 'sk-SK':
        return import('./compiled-lang/sk.json');
      default:
        return import('./compiled-lang/en.json');
    }
}


//@ts-ignore
if(!window.__skip_render){ 
  const locale = navigator.language;
  loadLocaleData(locale).then((messages) => {    
  ReactDOM.render(<App locale={locale}  messages={messages}/>, document.getElementById("root"));
});
};
