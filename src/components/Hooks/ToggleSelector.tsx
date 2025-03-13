import { useReducer } from "react";
import { RotateCcw } from "lucide-react";

// 📌 Problem Statement:
// Create a Toggle List Selection App using useReducer that:

// Displays a list of selectable items (e.g., "Apple", "Banana", "Cherry", "Date").
// Allows users to toggle selection of an item (if clicked once, it's selected; clicked again, it's deselected).
// Includes a "Select All" button that selects all items.
// Includes a "Deselect All" button that clears all selections.
// Includes a "Reset" button that restores the initial state (no selections).
// 💡 Requirements:
// Use useReducer instead of useState.
// The state should be an object with a selectedItems array.
// Use action types:
// "toggle" → Toggles an item's selection state.
// "selectAll" → Selects all items.
// "deselectAll" → Deselects all items.
// "reset" → Resets selection to the initial state.
// 🎯 Expected Behavior
// ✅ Clicking an item selects/deselects it.
// ✅ Clicking "Select All" selects all items.
// ✅ Clicking "Deselect All" clears all selections.
// ✅ Clicking "Reset" restores everything to the initial state.

// 🚀 Bonus Challenge (If You Want Extra Difficulty)
// Persist selections in local storage.
// Allow adding/removing items dynamically from the list.
// Show the count of selected items.

interface Items {
  [key: string]: boolean;
}

interface State {
  selectAll: boolean;
  items: Items;
}

type ReducerAction =
  | { type: "select"; item: string }
  | { type: "groupSelect"; selected: boolean }
  | { type: "reset" };

const DEFAULT_STATE: State = {
  selectAll: false,
  items: {
    apple: false,
    banana: true,
    grapes: false,
    mango: true,
  },
};

const reducer = (state: State, action: ReducerAction): State => {
  switch (action.type) {
    case "select":
      const { items } = state;
      const { item } = action;
      return {
        ...state,
        items: {
          ...items,
          [item]: !items[item],
        },
      };
    case "groupSelect":
      return Object.entries(state.items).reduce(
        (acc, [item]) => {
          acc.items[item] = action.selected;

          return acc;
        },
        { ...state, selectAll: !state.selectAll } as State
      );
    case "reset":
      return DEFAULT_STATE;
    default:
      return state;
  }
};

const ToggleSelector = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  return (
    <div className="flex-container flex-xy-center">
      <table className="flex-container min-w-70">
        <thead>
          <tr className="flex">
            <th className="basis-2/3 font-extrabold flex flex-xy-center">
              Item
            </th>
            <th className="basis-1/3 font-extrabold">
              <input
                id="group-select"
                type="checkbox"
                className="hover:cursor-pointer"
                checked={state.selectAll}
                onChange={(e) =>
                  dispatch({
                    type: "groupSelect",
                    selected: e.target.checked,
                  })
                }
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(state.items).map(([item]) => (
            <tr key={item} className="flex">
              <th className="basis-2/3">
                <label htmlFor={item} className="hover:cursor-pointer">
                  {item}
                </label>
              </th>
              <th className="basis-1/3">
                <input
                  id={item}
                  type="checkbox"
                  className="hover:cursor-pointer"
                  checked={state.items[item]}
                  onChange={(e) =>
                    dispatch({
                      type: "select",
                      item: e.target.id,
                    })
                  }
                />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ToggleSelector;
