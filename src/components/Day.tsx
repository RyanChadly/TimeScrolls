import Hour from "./Hour";
import range from "lodash/range";
import "./Day.css";
import { useRef, useState } from "react";
interface Props {
  handleSlide: (a: number) => void;
  hour: number;
  minutes: number;
}
const Day: React.FC<Props> = ({ handleSlide, hour, minutes }) => {
  const containerRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [mouseDown, setMouseDown] = useState(false);
  const [x, setX] = useState(0);
  const i = hour < 12 ? 12 + hour : hour - 12;
  const hours = [...range(24).splice(i), ...range(24).splice(0, i + 1)];

  const minutesProportion = (index: number) => {
    if (index === 0) {
      return 60 - minutes;
    }
    if (index === hours.length - 1) {
      return minutes;
    }
    return 60;
  };
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
