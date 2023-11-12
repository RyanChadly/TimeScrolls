import { ColorName, colorObject } from "../../data/colors";
import "./Hour.scss";

interface HourProps {
  hour: number;
  minutes: number;
  colorName: ColorName;
}

const day = Array.from(Array(8), (_x, i) => i + 9);

export const Hour = ({ hour, minutes, colorName }: HourProps) => {
  const color = colorObject[colorName];

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
    <span className="hour" style={{ ...style, flex: minutes }} id={`h${hour}`}>
      {hour}
    </span>
  );
};
