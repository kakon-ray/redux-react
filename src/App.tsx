import "./App.css";
import { Button } from "./components/ui/button";
import { deccrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (value: number) => {
    dispatch(increment(value));
  };

  const handleDeccrement = (value: number) => {
    dispatch(deccrement(value));
  };

  return (
    <>
      <div>
        <h1>Coumter With Redux</h1>
        <Button onClick={() => handleIncrement(1)}>Increment</Button>
        <div>{count}</div>
        <Button onClick={() => handleDeccrement(1)}>Decrement</Button>
      </div>
    </>
  );
}

export default App;
