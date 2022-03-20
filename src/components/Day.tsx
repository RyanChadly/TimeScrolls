import Hour from "./Hour";
import range from "lodash/range";
import chunk from "lodash/range";
import "./Day.css";
interface Props {
  maxWidth: number;
  time: Date;
  hour: number;
  minutes: number;
}
const Day: React.FC<Props> = ({ maxWidth, time, hour, minutes }) => {
  const i = hour < 12 ? 12 + hour : hour - 12;
  const hours = [...range(24).splice(i), ...range(24).splice(0, i)];

  const minutesProportion = (index: number) => {
    if (index === 0) {
      return 60 - minutes;
    }
    if (index === hours.length - 1) {
      return minutes;
    }
    return 60;
  };

  return (
    <div className="day">
      {hours.map((h, index) => {
        return (
          <Hour
            hour={h}
            minutes={minutesProportion(index)}
            current={h === hour}
          />
        );
      })}
    </div>
  );
};

export default Day;
