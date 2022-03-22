import Day from "./Day";
import "./Slider.css";
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
  const add_minutes = function (
    dt: { getTime: () => number },
    minutes: number
  ) {
    return new Date(dt.getTime() + minutes * 60000);
  };

  const timeString = () => {
    return add_minutes(time, count).toLocaleTimeString("en-GB", {
      timeZone: timeZone,
      timeZoneName: "short",
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
      <div style={{ flexBasis: "15%" }}>
        <div>{name}</div>
        <div>{timeString()}</div>
      </div>

      <Day
        handleSlide={handleSlide}
        hour={parseInt(timeString().split(":")[0])}
        minutes={parseInt(timeString().split(":")[1])}
      />
    </div>
  );
};

export default Slider;
