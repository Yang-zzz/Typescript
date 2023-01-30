import React from "react";
import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from ".";
import {Dispatch} from 'redux'

function App() {
  let [user, setUser] = useState(["kim"]); // 제네릭을 통해 두가지 타입도지정해줄 수 있다.
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch :Dispatch = useDispatch();
  return (
    // <div>
    //   <h4>안녕하십니까</h4>
    //   <Profile name="철수" age="20"></Profile>
    // </div>
    <div className="App">
      {꺼내온거.count}
      <button
        onClick={() => {
          dispatch({ type: "증가" });
        }}
      >버튼</button>
    </div>
  );
}

function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name}입니다</div>;
}

export default App;
