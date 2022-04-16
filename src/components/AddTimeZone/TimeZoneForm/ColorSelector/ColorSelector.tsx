import { useState } from "react";
import { colors } from "../../../../data/colors";
import "./ColorSelector.css";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("blue");

  const handleClick = (name: string) => {
    setSelectedColor(name);
  };
  return (
    <div className={"color-selector"}>
      {colors.map((color) => (
        <div
          style={{ backgroundColor: color.base }}
          className={`color${selectedColor === color.name ? "-selected" : ""}`}
          key={color.name}
          onClick={() => handleClick(color.name)}
        ></div>
      ))}
    </div>
  );
};
export default ColorSelector;
