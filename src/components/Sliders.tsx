import { useEffect, useState } from "react";
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

  const add_minutes = function (dt: Date, minutes: number) {
    return new Date(dt.getTime() + minutes * 60000);
  };

  useEffect(() => {
    setSlidedTime(add_minutes(time, count));
  }, [count, time]);
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
      <div className="days">
        {locations.map((location) => {
          return (
            <Day
              handleSlide={handleSlide}
              time={slidedTime}
              timeZone={location.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sliders;
