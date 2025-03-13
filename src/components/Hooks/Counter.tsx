import { useReducer } from "react";

interface State {
  count: number;
  gap: number;
}
type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "updateGap"; gap: State["gap"] };

const DEFAULT_STATE: State = {
  count: 0,
  gap: 1,
};

const countReducer = (state: State, action: CounterAction): State => {
  switch (action.type) {
    case "decrement":
      return {
        ...state,
        count: state.count - state.gap,
      };
    case "increment":
      return {
        ...state,
        count: state.count + state.gap,
      };
    case "updateGap":
      return { ...state, gap: action.gap };
    case "reset":
      return { ...DEFAULT_STATE };
    default:
      return state;
  }
};

const Counter = () => {
  const [{ count, gap }, dispatch] = useReducer(countReducer, DEFAULT_STATE);

  return (
    <div className="flex-container flex-xy-center gap-9">
      <div className="flex gap-2 flex-xy-center">
        <label htmlFor="gap">Gap:</label>
        <input
          id="gap"
          type="number"
          value={gap}
          className="w-15 text-center"
          min={1}
          onChange={(e) =>
            dispatch({ type: "updateGap", gap: Number(e.target.value) })
          }
        />
      </div>
      <div className="flex gap-7 text-5xl w-50">
        <div className="basis-1/3 font-extrabold">
          <p
            className="hover:cursor-pointer"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </p>
        </div>
        <div className="basis-1/3">
          <p>{count}</p>
        </div>
        <div className="basis-1/3 font-extrabold">
          <p
            className="hover:cursor-pointer"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </p>
        </div>
      </div>
      <button className="button" onClick={() => dispatch({ type: "reset" })}>
        RESET
      </button>
    </div>
  );
};
export default Counter;
