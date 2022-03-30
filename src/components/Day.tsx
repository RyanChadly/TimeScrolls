import Hour from "./Hour";
import range from "lodash/range";
import "./Day.css";
import { useRef, useState } from "react";
interface Props {
  handleSlide: (a: number) => void;
  time: Date;
  timeZone: string;
}
const Day: React.FC<Props> = ({ handleSlide, time, timeZone }) => {
  const containerRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [mouseDown, setMouseDown] = useState(false);
  const [x, setX] = useState(0);
  const rangeBefore = range(-12, 0, 1).map((h) => addHours(h));
  const rangeAfter = range(0, 13, 1).map((h) => addHours(h));
  const hours = [...rangeBefore, ...rangeAfter];
  const hour = parseInt(timeString(time).split(":")[0]);
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
  const handleMouseDown = (e: any) => {
    setMouseDown(true);
    setX(e.clientX);
  };
  const handleMouseMove = (e: any) => {
    if (mouseDown) {
      const maxWidth = containerRefDiv.current.clientWidth;
      const deltaX = e.clientX - x;
      setX(e.clientX);
      const maxTime = 24 * 60;
      const deltaMinutes = (deltaX * maxTime) / maxWidth;
      handleSlide(-deltaMinutes);
    }
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };
  return (
    <div
      className="day"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={containerRefDiv}
      style={{ cursor: mouseDown ? "grabbing" : "grab", userSelect: "none" }}
    >
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
