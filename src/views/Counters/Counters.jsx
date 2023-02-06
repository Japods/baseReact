import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { increment, decrement } from "../../Store/Count/Count";

const Counter = () => {
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex space-x-5">
      {counters.map((counter) => (
        <div key={counter.id}>
          <Button label="+" action={() => dispatch(increment(counter.id))} />
          <Button label="-" action={() => dispatch(decrement(counter.id))} />
          <p className="text-center">{counter.value}</p>
        </div>
      ))}
      <div className="text-2xl space-x-3 flex">
        <div>Total:</div>
        <div>{counters.reduce((sum, counter) => sum + counter.value, 0)}</div>
      </div>
    </div>
  );
};

export default Counter;
