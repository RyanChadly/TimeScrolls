import { useEffect, useRef, useState } from "react";
import { HandleDelete, HandleSlide, Location } from "../App";
import Day from "./Day";
import SliderLabel from "./SlidersLabels/SliderLabel";
import "./Sliders.css";

interface IProps {
  locations: Location[];
  time: Date;
  count: number;
  handleDelete: HandleDelete;
  handleSlide: HandleSlide;
}

const Sliders: React.FC<IProps> = ({
  locations,
  time,
  count,
  handleDelete,
  handleSlide,
}) => {
  const [slidedTime, setSlidedTime] = useState<Date>(new Date());
  const containerRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [mouseDown, setMouseDown] = useState(false);
  const [x, setX] = useState(0);
  const add_minutes = function (dt: Date, minutes: number) {
    return new Date(dt.getTime() + minutes * 60000);
  };

  useEffect(() => {
    setSlidedTime(add_minutes(time, count));
  }, [count, time]);
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
    <div className="sliders">
      <div className="labels">
        {locations.map((location, index) => {
          return (
            <SliderLabel
              location={location}
              slidedTime={slidedTime}
              index={index}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <div
        className="days"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        ref={containerRefDiv}
        style={{ cursor: mouseDown ? "grabbing" : "grab", userSelect: "none" }}
      >
        {locations.map((location) => {
          return <Day time={slidedTime} timeZone={location.value} />;
        })}
      </div>
    </div>
  );
};

export default Sliders;
