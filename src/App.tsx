import { useState, useEffect, useRef } from "react";
import Slider from "./components/Slider";

export default function App() {
  const [count, setCount] = useState(0);
  const handleSlide = (value: number) => {
    setCount((previous) => previous + value);
  };
  return (
    <div>
      <button onClick={() => setCount(0)}>Reset</button>
      <Slider count={count} handleSlide={handleSlide} />
      <Slider count={count} handleSlide={handleSlide} />
      <Slider count={count} handleSlide={handleSlide} />
      <Slider count={count} handleSlide={handleSlide} />
      <Slider count={count} handleSlide={handleSlide} />
    </div>
  );
}
