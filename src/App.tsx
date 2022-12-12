import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumber,
  changeAge,
  IInitialState,
  minusNumber,
  resetAll,
} from "./utills/redux/action";

function App() {
  const dispatch = useDispatch();
  const {
    number,
    baseUser: { age, name },
  } = useSelector((value: IInitialState) => value);
  return (
    <div className="App">
      <div>
        <p>{number ? number : "0"}</p>
        <p>
          {name} {age}
        </p>
        <button onClick={() => dispatch(addNumber(10))}>ADD 10</button>
        <button onClick={() => dispatch(minusNumber(10))}>Minus 10</button>
        <button onClick={() => dispatch(resetAll())}>Reset ALL</button>
        <button onClick={() => dispatch(changeAge(50))}>Age 50</button>
      </div>
    </div>
  );
}

export default App;
