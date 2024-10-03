import "./App.css";
import { useState } from "react";

function App() {
  const [iceCreams, setIceCreams] = useState([
    {
      flavor: "Chocolate",
      key: "chocolate",
      price: 5,
      color: "#9e6f68",
      fontColor: "white",
      count: 0,
    },
    {
      flavor: "Vanilla",
      key: "vanilla",
      price: 4,
      color: "#f0f0f0",
      fontColor: "black",
      count: 0,
    },
    {
      flavor: "Strawberry",
      key: "strawberry",
      price: 2,
      color: "#ed7496",
      fontColor: "white",
      count: 0,
    },
    {
      flavor: "Mint",
      key: "mint",
      price: 4,
      color: "#68cc9d",
      fontColor: "white",
      count: 0,
    },
    {
      flavor: "Cotton Candy",
      key: "cottoncandy",
      price: 6,
      color: "#ce33cb",
      fontColor: "white",
      count: 0,
    },
    {
      flavor: "Cherry",
      key: "cherry",
      price: 5,
      color: "#b1160a",
      fontColor: "white",
      count: 0,
    },
  ]);

  const handleIncrement = (key) => {
    setIceCreams((prevIceCreams) =>
      prevIceCreams.map((iceCream) =>
        iceCream.key === key
          ? { ...iceCream, count: iceCream.count + 1 }
          : iceCream
      )
    );
  };

  const totalPrice = iceCreams.reduce(
    (acc, iceCream) => acc + iceCream.price * iceCream.count,
    0
  );
  const totalPriceWithDiscount = totalPrice * 0.9; // 10% discount

  return (
    <div className="app-container">
      <div className="ice-cream-grid">
        {iceCreams.map((iceCream) => (
          <div
            key={iceCream.key}
            className="ice-cream"
            style={{ backgroundColor: iceCream.color, color: iceCream.fontColor }}
            onClick={() => handleIncrement(iceCream.key)}
          >
            {iceCream.flavor}
          </div>
        ))}
      </div>
      <div className="summary">
        <div className="left-section">
          {iceCreams.map((iceCream) => (
            <p key={iceCream.key}>
              {iceCream.flavor}: {iceCream.count}
            </p>
          ))}
        </div>
        <div className="right-section">
          <p>Discount: 10%</p>
          <p>Subtotal: ${totalPrice}</p>
          <p>Total: ${totalPriceWithDiscount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
