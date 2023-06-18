import { useState } from "react";
import { ColorName, colors, defaultColorName } from "../../../data/colors";
import "./ColorSelector.scss";

type HandleChangeColor = (color: ColorName) => void;

interface ColorSelectorProps {
  handleChange: HandleChangeColor;
}
const ColorSelector: React.FC<ColorSelectorProps> = ({ handleChange }) => {
  const [selectedColor, setSelectedColor] = useState(defaultColorName);

  const handleClick = (name: ColorName) => {
    setSelectedColor(name);
    handleChange(name);
  };
  return (
    <div className={"color-selector"}>
      {colors.map((color) => (
        <div
          key={color.name}
          className={`color-wrapper${
            selectedColor === color.name ? " selected" : ""
          }`}
          style={{ borderColor: color.base }}
        >
          <div
            style={{ backgroundColor: color.base }}
            className="color"
            key={color.name}
            onClick={() => handleClick(color.name)}
          ></div>
        </div>
      ))}
    </div>
  );
};
export default ColorSelector;
