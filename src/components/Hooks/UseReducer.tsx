import { useReducer } from "react";

interface Counter {
  action: "increment" | "decrement" | "reset";
}

const countReducer = (count: number, counter: Counter) => {
  switch (counter.action) {
    case "decrement":
      return (count -= 1);
    case "increment":
      return (count += 1);
    case "reset":
      return 0;
  }
};

const UseReducer = () => {
  const [count, countUpdater] = useReducer(countReducer, 0);

  return (
    <div className="flex-container flex-xy-center gap-2">
      <div className="flex gap-5 ">
        <button onClick={() => countUpdater({ action: "decrement" })}>
          <h1 className="text-xl font-extrabold">-</h1>
        </button>
        {count}
        <button onClick={() => countUpdater({ action: "increment" })}>
          <h1 className="text-xl font-extrabold">+</h1>
        </button>
      </div>
      <button
        className="button"
        onClick={() => countUpdater({ action: "reset" })}
      >
        reset
      </button>
    </div>
  );
};
export default UseReducer;
