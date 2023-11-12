import "./Day.scss";
import { AiFillCaretDown } from "react-icons/ai";
import { ColorName } from "../../data/colors";
import { Hour } from "../Hour/Hour";

interface Props {
  time: Date;
  timeZone: string;
  reach: number;
  colorName: ColorName;
}
const Day: React.FC<Props> = ({ time, timeZone, reach, colorName }) => {
  const emptyArray = Array(reach + reach + 1);
  const hours = Array.from(emptyArray, (x, i) => addHours(i - reach));

  const minutes = parseInt(timeString(time).split(":")[1]);

  function addHours(h: number): number {
    const newDate = new Date(time.getTime() + h * 60 * 60000);
    const newStringDate = timeString(newDate);
    return parseInt(newStringDate.split(":")[0]);
  }

  function timeString(timeValue: Date): string {
    return timeValue.toLocaleTimeString("en-GB", {
      timeZone: timeZone,
      timeZoneName: "short",
    });
  }

  function minutesProportion(index: number) {
    if (index === 0) {
      return 60 - minutes;
    }
    if (index === hours.length - 1) {
      return minutes;
    }
    return 60;
  }

  return (
    <div className="day">
      <div className="time-indicator">
        <AiFillCaretDown />
      </div>
      <div className="hours">
        {hours.map((h, index) => {
          return (
            <Hour
              key={index}
              hour={h}
              minutes={minutesProportion(index)}
              colorName={colorName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Day;
