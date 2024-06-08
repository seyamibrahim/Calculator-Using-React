import React from "react";
import "./Buttons.css";
const Buttons = ({onButtonClick}) => {
  
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div>
      <div className="buttons-container">
        {btnNames.map((item) => {
          return (
            <button key={item} className="btn" onClick={()=> onButtonClick(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Buttons;
