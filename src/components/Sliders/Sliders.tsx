import { useEffect, useRef, useState } from "react";
import {
  HandleChangeOrder,
  HandleDelete,
  HandleSlide,
  Location,
} from "../../App";
import Day from "./Day";
import SliderLabel from "../SlidersLabels/SliderLabel";
import "./Sliders.css";

interface IProps {
  locations: Location[];
  time: Date;
  count: number;
  handleDelete: HandleDelete;
  handleSlide: HandleSlide;
  handleChangeOrder: HandleChangeOrder;
}

const Sliders: React.FC<IProps> = ({
  locations,
  time,
  count,
  handleDelete,
  handleSlide,
  handleChangeOrder,
}) => {
  const [slidedTime, setSlidedTime] = useState<Date>(new Date());
  const daysRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;
  const labelsRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;
  const slidersRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [mouseDown, setMouseDown] = useState(false);
  const [x, setX] = useState(0);
  const [reach, setReach] = useState(12);

  const add_minutes = function (dt: Date, minutes: number) {
    return new Date(dt.getTime() + minutes * 60000);
  };

  useEffect(() => {
    const minWidth = 70;
    let r = Math.floor(slidersRefDiv.current.clientWidth / (minWidth * 2));
    console.log("🚀 ~ file: Sliders.tsx ~ line 44 ~ useEffect ~ r", r);
    if (r > 12) {
      r = 12;
    }
    setReach(r);
  }, [slidersRefDiv.current?.clientWidth]);

  useEffect(() => {
    setSlidedTime(add_minutes(time, count));
  }, [count, time]);

  const handleMouseDown = (e: any) => {
    setMouseDown(true);
    setX(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (mouseDown) {
      const maxWidth = daysRefDiv.current.clientWidth;
      const deltaX = e.clientX - x;
      setX(e.clientX);
      const maxTime = reach * 2 * 60;
      const deltaMinutes = (deltaX * maxTime) / maxWidth;
      handleSlide(-deltaMinutes);
    }
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  return (
    <div className="sliders" ref={slidersRefDiv}>
      <div className="labels" ref={labelsRefDiv}>
        {locations.map((location, index) => {
          return (
            <SliderLabel
              key={index}
              location={location}
              slidedTime={slidedTime}
              index={index}
              handleDelete={handleDelete}
              handleChangeOrder={handleChangeOrder}
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
        ref={daysRefDiv}
        style={{ cursor: mouseDown ? "grabbing" : "grab", userSelect: "none" }}
      >
        {locations.map((location, index) => {
          return (
            <Day
              key={`Day${index}`}
              time={slidedTime}
              timeZone={location.value}
              reach={reach}
              colorName={location.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sliders;
