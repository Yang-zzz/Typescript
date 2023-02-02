var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
var 초기값 = { count: 0 };
function reducer(state, action) {
    if (state === void 0) { state = 초기값; }
    if (action.type === "증가") {
        return __assign(__assign({}, state), { count: state.count + 1 });
    }
    else if (action.type === "감소") {
        return __assign(__assign({}, state), { count: state.count - 1 });
    }
    else {
        return 초기값;
    }
}
var store = createStore(reducer);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
