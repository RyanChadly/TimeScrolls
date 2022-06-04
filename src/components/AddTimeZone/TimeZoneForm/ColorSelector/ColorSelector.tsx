import { useState } from "react";
import { ColorName, colors, defaultColorName } from "../../../../data/colors";
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
