import { useState, useEffect, useRef } from "react";

export default function App() {
  const containerRefDiv = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [width, setWidth] = useState(0);
  const [currentScrollLeft, setCurrentScrollLeft] = useState(0);

  const updateDivWidth = () => {
    const newScrollLeft = containerRefDiv.current.scrollLeft;
    if (currentScrollLeft < newScrollLeft) {
      setCurrentScrollLeft(newScrollLeft);
      if (width === 0) {
        setWidth(containerRefDiv.current.clientWidth + 10);
      } else {
        setWidth((previous) => previous + 10);
      }
    }
  };

  useEffect(() => {
    console.log("new width set: ", width);
  }, [width]);

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
        style={{ overflowX: "scroll", width: "100%" }}
        ref={containerRefDiv}
        onScroll={updateDivWidth}
      >
        <div style={{ width: getInnerDivStyle() }}>{width}</div>
      </div>
      <div>{width}</div>
    </div>
  );
}
