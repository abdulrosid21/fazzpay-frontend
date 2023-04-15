import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counter";
import Navbar from "@/components/navbar";

export default function Home() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <Navbar />
      <div className="h-full w-screen">
        <h1>Count: {count}</h1>
        <button className="w-20 h-7 bg-red-500" onClick={handleIncrement}>
          +
        </button>
        <button className="w-20 h-7 bg-blue-400" onClick={handleDecrement}>
          -
        </button>
      </div>
    </>
  );
}
