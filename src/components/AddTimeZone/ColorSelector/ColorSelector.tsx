import { useState } from "react";
import "./ColorSelector.css";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const colors = [
    { name: "orange", hex: "#FF6900" },
    { name: "yellow", hex: "#FCB900" },
    { name: "light-green", hex: "#7BDCB5" },
    { name: "green", hex: "#00D084" },
    { name: "light-blue", hex: "#8ED1FC" },
    { name: "blue", hex: "#0693E3" },
    { name: "grey", hex: "#ABB8C3" },
    { name: "red", hex: "#EB144C" },
    { name: "pink", hex: "#F78DA7" },
    { name: "purple", hex: "#9900EF" },
  ];
  const handleClick = (name: string) => {
    setSelectedColor(name);
  };
  return (
    <div className={"color-selector"}>
      {colors.map((color) => (
        <div
          style={{ backgroundColor: color.hex }}
          className={`color${selectedColor === color.name ? "-selected" : ""}`}
          key={color.name}
          onClick={() => handleClick(color.name)}
        ></div>
      ))}
    </div>
  );
};
export default ColorSelector;
