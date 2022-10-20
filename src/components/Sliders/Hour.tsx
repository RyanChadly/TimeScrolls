import { range } from "lodash";
import { ColorName, colors } from "../../data/colors";
import "./Hour.scss";
interface Props {
  hour: number;
  minutes: number;
  current: boolean;
  colorName: ColorName;
}

const Hour: React.FC<Props> = ({ hour, minutes, current, colorName }) => {
  const color = colors.find((c) => c.name === colorName);
  const day = range(9, 17);

  const style = day.includes(hour)
    ? {
        color: color?.dark,
        background: `linear-gradient(170deg, white 0%, ${color?.lighter}55 100%)`,
      }
    : {
        background: `linear-gradient(170deg, ${color?.lighter}55 0%, ${color?.lighter} 100%)`,
        color: color?.dark,
      };

  return (
    <span
      className={`hour  ${current ? "current" : ""} `}
      style={{ ...style, flex: minutes }}
      id={`h${hour}`}
    >
      {hour}
    </span>
  );
};

export default Hour;
