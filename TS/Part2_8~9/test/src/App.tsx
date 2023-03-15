import React, { useState } from "react";
import "./App.css";

// let 박스: JSX.Element = <div></div>;

function App() {
  let [user, setUser] = useState("kim"); //useState 는 자동으로 타입을 지정해줌.

  return (
    <div>
      <h4>안녕하십니까</h4>
      <Profile name="철수"></Profile>
    </div>
  );
}

function Profile(props: { name: string }): JSX.Element {
  return <div>프로필입니다.</div>;
}
export default App;
