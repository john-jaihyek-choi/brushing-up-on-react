import React from "react";

const Controller = ({ setCssProperties }) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <label htmlFor="item-count">Item count:</label>
      <input
        type="number"
        id="item-count"
        name="item-count"
        defaultValue={10}
        min={0}
        max={1000}
        onChange={(e) =>
          setCssProperties((prev) => ({
            ...prev,
            itemCount: Number(e.target.value),
          }))
        }
      />
      <label htmlFor="wrap">Wrap: </label>
      <select
        id="wrap"
        name="wrap"
        onChange={(e) =>
          setCssProperties((prev) => ({
            ...prev,
            wrap: e.target.value,
          }))
        }
      >
        <option value="flex-nowrap">nowrap</option>
        <option value="flex-wrap">wrap</option>
        <option value="flex-wrap-reverse">wrap-reverse</option>
      </select>
      <label htmlFor="direction">Direction: </label>
      <select
        id="direction"
        name="direction"
        onChange={(e) =>
          setCssProperties((prev) => ({
            ...prev,
            direction: e.target.value,
          }))
        }
      >
        <option value="flex-row">row</option>
        <option value="flex-row-reverse">row-reverse</option>
        <option value="flex-col">column</option>
        <option value="flex-col-reverse">column-reverse</option>
      </select>
      <label htmlFor="height">Height</label>
      <input
        type="range"
        id="height"
        name="height"
        min={10}
        max={100}
        defaultValue={100}
        onChange={(e) =>
          setCssProperties((prev) => ({
            ...prev,
            height: Number(e.target.value),
          }))
        }
      />
      <label htmlFor="basis">Basis</label>
      <input
        type="range"
        id="basis"
        name="basis"
        min={10}
        max={100}
        defaultValue={10}
        onChange={(e) =>
          setCssProperties((prev) => ({
            ...prev,
            basis: Number(e.target.value),
          }))
        }
      />
    </div>
  );
};

export default React.memo(Controller);
