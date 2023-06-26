import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { otherAction } from "./otherReducer";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const otherValue = useSelector((state) => state.other);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1)); // Pass the payload value here, e.g., 1
  };

  const handleDecrement = () => {
    dispatch(decrement(1)); // Pass the payload value here, e.g., 1
  };

  const handleOtherAction = () => {
    dispatch(otherAction()); // Dispatch an action from the otherReducer
  };

  return (
    <div>
      <p>Count: {counter}</p>
      <p>Other Value: {otherValue}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleOtherAction}>Other Action</button>
    </div>
  );
};

export default Counter;
