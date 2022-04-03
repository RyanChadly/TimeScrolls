import Day from "./Day";
import "./Slider.css";
import { MdDragIndicator } from "react-icons/md";
interface IProps {
  count: number;
  handleSlide: any;
  timeZone: string;
  time: Date;
  name: string;
}

const Slider: React.FC<IProps> = ({
  count,
  handleSlide,
  timeZone,
  time,
  name,
}) => {
  const add_minutes = function (dt: Date, minutes: number) {
    return new Date(dt.getTime() + minutes * 60000);
  };

  const timeString = () => {
    return add_minutes(time, count).toLocaleTimeString("en-GB", {
      timeZone: timeZone,
      timeZoneName: "short",
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  };

  return (
    <div
      className="slider"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      <div draggable="true" style={{ flexBasis: "15%" }}>
        <MdDragIndicator />
        <div>{name}</div>
        <div>{timeString()}</div>
      </div>

      <Day
        handleSlide={handleSlide}
        time={add_minutes(time, count)}
        timeZone={timeZone}
      />
    </div>
  );
};

export default Slider;
