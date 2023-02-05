import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Store/Count/Count";

function App() {
  const count = useSelector((state) => state.counter.initialState.value);
  const dispatch = useDispatch();

  return (
    <div className="space-x-5">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
