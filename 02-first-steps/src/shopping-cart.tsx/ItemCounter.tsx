import { useState } from "react";



import './ItemCounter.css'

interface Props {
  productName: string;
  quantity?: number;
  // quantity: number | undefined;
}

export const ItemCounter = ({ productName, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    if (count == 0) return;
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section
      className="item-row"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: 10,
      //   marginTop: 10,
      // }}
    >
      <span
        className="item-text"
        style={{          
          color: count === 1 ? "red" : "black",
        }}
      >
        {productName}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
};
