import { range } from "lodash";
import "./Hour.css";
interface Props {
  hour: number;
  minutes: number;
  current: boolean;
}

const Hour: React.FC<Props> = ({ hour, minutes, current }) => {
  const dayNightClassName = (): string => {
    const day = range(9, 18);
    if (day.includes(hour)) {
      return "d";
    }
    return "n";
  };

  return (
    <span
      className={`hour ${dayNightClassName()} ${current ? "current" : ""} `}
      style={{ flex: minutes }}
      id={`h${hour}`}
    >
      {hour}
    </span>
  );
};

export default Hour;
