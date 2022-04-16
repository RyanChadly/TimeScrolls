import { range } from "lodash";
import { ColorName, colors } from "../../data/colors";
import "./Hour.css";
interface Props {
  hour: number;
  minutes: number;
  current: boolean;
  colorName: ColorName;
}

const Hour: React.FC<Props> = ({ hour, minutes, current, colorName }) => {
  const getColor = () => {
    return colors.find((color) => color.name === colorName);
  };

  const getStyle = () => {
    const day = range(9, 17);
    if (day.includes(hour)) {
      return {
        background: `linear-gradient(30deg, white 0%, ${
          getColor()?.lighter
        } 100%)`,
        color: getColor()?.dark,
      };
    } else {
      return {
        background: `linear-gradient(30deg, ${getColor()?.mediumDark} 0%, ${
          getColor()?.shade
        } 100%)`,
        color: getColor()?.lighter,
      };
    }
  };

  return (
    <span
      className={`hour  ${current ? "current" : ""} `}
      style={{ ...getStyle(), flex: minutes }}
      id={`h${hour}`}
    >
      {hour}
    </span>
  );
};

export default Hour;
