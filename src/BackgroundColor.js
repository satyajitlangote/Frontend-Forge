import React, { useState, useRef } from "react";

function BackgroundColor() {

  const [color, setColor] = useState("White");
  const previousColor = useRef("");

  const changeColor = (newColor) => {
    previousColor.current = color;
    setColor(newColor);

    document.body.style.backgroundColor = newColor;
  };

  return (
    <div>

      <h2>Background Color Changer</h2>

      <h3>Current Color: {color}</h3>

      <h3>
        Previous Color: {previousColor.current || "None"}
      </h3>

      <button onClick={() => changeColor("Red")}>
        Red
      </button>

      <button onClick={() => changeColor("Blue")}>
        Blue
      </button>

      <button onClick={() => changeColor("Green")}>
        Green
      </button>

    </div>
  );
}

export default BackgroundColor;