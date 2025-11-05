import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  const { counter, hanldeAdd, hanldeReset, hanldeSubtract } = useCounter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>counter: {counter} </h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={hanldeAdd}>+1</button>
        <button onClick={hanldeSubtract}>-1</button>
        <button onClick={hanldeReset}>reset</button>
      </div>
    </div>
  );
};
