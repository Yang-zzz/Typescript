"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
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
var store = (0, redux_1.createStore)(reducer);
var root = client_1.default.createRoot(document.getElementById("root"));
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
