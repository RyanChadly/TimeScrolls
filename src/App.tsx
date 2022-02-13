import { useState, useEffect, useRef } from "react";
import Hour from "./components/Hour";

export default function App() {
  const containerRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [width, setWidth] = useState(0);
  const [currentScrollLeft, setCurrentScrollLeft] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const newScrollLeft = containerRefDiv.current.scrollLeft;
    const maxScrollLeft =
      containerRefDiv.current.scrollWidth - containerRefDiv.current.clientWidth;
    if (maxScrollLeft - 1 <= newScrollLeft) {
      containerRefDiv.current.scrollLeft = maxScrollLeft - 1;
      setCounter((previous) => previous + 1);
    }
    if (newScrollLeft === 0) {
      containerRefDiv.current.scrollLeft = newScrollLeft + 1;
      setCounter((previous) => previous - 1);
    }
  };
  useEffect(() => {
    containerRefDiv.current.scrollLeft = 1;
  }, []);
  const getInnerDivStyle = () => {
    if (containerRefDiv.current && width !== 0) {
      return `${width}px`;
    } else {
      return "101%";
    }
  };

  return (
    <div>
      <div
        className="App"
        style={{
          overflowX: "scroll",
          width: "100%",
          border: "solid",
          height: "200",
          // scrollBehavior: "smooth",
        }}
        ref={containerRefDiv}
        onScroll={handleScroll}
      >
        <div
          style={{
            float: "none",
            width: "101%",
            border: "solid",
            textAlign: "center",
          }}
        >
          {counter}
        </div>
      </div>
    </div>
  );
}
