import React, { useState } from "react";
import "./App.css";
// let 박스: JSX.Element = <div></div>;
function App() {
    var _a = useState("kim"), user = _a[0], setUser = _a[1]; //useState 는 자동으로 타입을 지정해줌.
    return (<div>
      <h4>안녕하십니까</h4>
      <Profile name="철수"></Profile>
    </div>);
}
function Profile(props) {
    return <div>프로필입니다.</div>;
}
export default App;
