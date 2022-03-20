import { useState, useEffect, useRef } from "react";
import Day from "./Day";
interface IProps {
  count: number;
  handleSlide: any;
  timeZone: string;
  time: Date;
}

const Slider: React.FC<IProps> = ({ count, handleSlide, timeZone, time }) => {
  const containerRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRefDiv.current.clientWidth !== undefined) {
      setWidth(containerRefDiv.current.clientWidth);
    }
  }, [containerRefDiv, width]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const newScrollTop = containerRefDiv.current.scrollTop;
    console.log(newScrollTop); // 1 if top, 0 if bottom

    const maxScrollTop =
      containerRefDiv.current.scrollHeight -
      containerRefDiv.current.clientHeight;
    if (newScrollTop === maxScrollTop) {
      //going up
      containerRefDiv.current.scrollTop = maxScrollTop - 1;
      handleSlide(1);
    }
    if (newScrollTop === 0) {
      // going down
      containerRefDiv.current.scrollTop = 1;
      handleSlide(-1);
    }
  };

  const add_minutes = function (
    dt: { getTime: () => number },
    minutes: number
  ) {
    return new Date(dt.getTime() + minutes * 120000);
  };

  const timeString = () => {
    return add_minutes(time, count).toLocaleTimeString("en-GB", {
      timeZone: timeZone,
      timeZoneName: "short",
    });
  };
  useEffect(() => {
    containerRefDiv.current.scrollTop = 1;
  }, []);

  return (
    <div
      className="App"
      style={{
        overflowY: "scroll",
        width: "100%",
        height: 100,
      }}
      ref={containerRefDiv}
      onScroll={handleScroll}
    >
      <div
        style={{
          float: "none",
          width: "100%",
          height: "102%",
          verticalAlign: "middle",
          textAlign: "center",
        }}
      >
        {timeString()}

        <Day
          maxWidth={width}
          time={add_minutes(time, count)}
          hour={parseInt(timeString().split(":")[0])}
          minutes={parseInt(timeString().split(":")[1])}
        />
      </div>
    </div>
  );
};

export default Slider;
