import { decrement, increment } from "./redux/features/counter/counter";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  }; 

  return (
    <div className="flex justify-between items-center h-screen">
      <h1>Counter with Redux</h1>
      <button className="bg-red-50" onClick={() => handleIncrement(5)}>Increment</button>
      <button onClick={() => handleIncrement(1)}>Increment</button>

      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
