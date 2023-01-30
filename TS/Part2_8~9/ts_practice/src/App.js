"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("react");
require("./App.css");
var react_redux_1 = require("react-redux");
function App() {
    var _a = (0, react_2.useState)(["kim"]), user = _a[0], setUser = _a[1]; // 제네릭을 통해 두가지 타입도지정해줄 수 있다.
    var 꺼내온거 = (0, react_redux_1.useSelector)(function (state) { return state; });
    var dispatch = (0, react_redux_1.useDispatch)();
    return (
    // <div>
    //   <h4>안녕하십니까</h4>
    //   <Profile name="철수" age="20"></Profile>
    // </div>
    <div className="App">
      {꺼내온거.count}
      <button onClick={function () {
            dispatch({ type: "증가" });
        }}>버튼</button>
    </div>);
}
function Profile(props) {
    return <div>{props.name}입니다</div>;
}
exports.default = App;
