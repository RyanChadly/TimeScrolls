import { useState, useEffect, useRef } from "react";
import Day from "./Day";
interface IProps {
  count: number;
  handleSlide: any;
  timeZone: string;
}

const Slider: React.FC<IProps> = ({ count, handleSlide, timeZone }) => {
  const containerRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [time, setTime] = useState(
    new Date(Date.now()).toLocaleTimeString("en-GB")
  );
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRefDiv.current.clientWidth !== undefined) {
      setWidth(containerRefDiv.current.clientWidth);
      console.log(containerRefDiv.current.clientWidth);
      console.log(width);
    }
  }, [containerRefDiv, width]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const newScrollLeft = containerRefDiv.current.scrollLeft;
    const maxScrollLeft =
      containerRefDiv.current.scrollWidth - containerRefDiv.current.clientWidth;

    if (maxScrollLeft - 1 <= newScrollLeft) {
      containerRefDiv.current.scrollLeft = maxScrollLeft - 1;
      count++;
      handleSlide(1);
    }
    if (newScrollLeft === 0) {
      containerRefDiv.current.scrollLeft = newScrollLeft + 1;
      count--;
      handleSlide(-1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setTime(
        new Date(Date.now()).toLocaleTimeString("en-GB", {
          timeZone: timeZone,
          timeZoneName: "short",
        })
      );
    }, 1000);
  }, [time, timeZone]);

  useEffect(() => {
    containerRefDiv.current.scrollLeft = 1;
  }, []);

  return (
    <div
      className="App"
      style={{
        overflowX: "scroll",
        width: "100%",
        height: 100,
        scrollBehavior: "smooth",
      }}
      ref={containerRefDiv}
      onScroll={handleScroll}
    >
      <div
        style={{
          float: "none",
          width: "101%",
          // border: "solid",
          verticalAlign: "middle",
          height: "100%",
          textAlign: "center",
        }}
      >
        {count}, {time}
        <Day maxWidth={743} />
      </div>
    </div>
  );
};

export default Slider;
