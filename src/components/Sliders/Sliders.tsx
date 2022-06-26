import { useEffect, useRef, useState } from "react";
import {
  HandleChangeOrder,
  HandleDelete,
  HandleSlide,
  Location,
} from "../../App";
import Day from "./Day";
import SliderLabel from "../SlidersLabels/SliderLabel";
import "./Sliders.scss";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback/ErrorFallback";

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
  const [reach, setReach] = useState(getReach());

  const add_minutes = function (dt: Date, minutes: number) {
    return new Date(dt.getTime() + minutes * 60000);
  };

  window.addEventListener("resize", adaptWidth);
  function getReach() {
    const minWidth = 50;
    return Math.floor(daysRefDiv.current?.clientWidth / (minWidth * 2));
  }
  function adaptWidth() {
    setReach(getReach());
  }
  useEffect(() => adaptWidth);
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
            <ErrorBoundary key={index} FallbackComponent={ErrorFallback}>
              <SliderLabel
                key={index}
                location={location}
                slidedTime={slidedTime}
                index={index}
                handleDelete={handleDelete}
                handleChangeOrder={handleChangeOrder}
              />
            </ErrorBoundary>
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
            <ErrorBoundary key={index} FallbackComponent={ErrorFallback}>
              <Day
                key={`Day${index}`}
                reach={reach}
                time={slidedTime}
                timeZone={location.value}
                colorName={location.color}
              />
            </ErrorBoundary>
          );
        })}
      </div>
    </div>
  );
};

export default Sliders;
