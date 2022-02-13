import { useState, useEffect, useRef } from "react";
interface IProps {
  count: number;
  handleSlide: any;
}

const Slider: React.FC<IProps> = ({ count, handleSlide }) => {
  const containerRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;

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
    containerRefDiv.current.scrollLeft = 1;
  }, []);

  return (
    <div>
      <div
        className="App"
        style={{
          overflowX: "scroll",
          width: "100%",
          border: "solid",
          height: "200",
          scrollBehavior: "smooth",
        }}
        ref={containerRefDiv}
        onScroll={handleScroll}
      >
        <div
          style={{
            float: "none",
            width: "100.000000000000000000001%",
            border: "solid",
            textAlign: "center",
          }}
        >
          {count}
        </div>
      </div>
    </div>
  );
};

export default Slider;
