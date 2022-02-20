import { useState } from "react";
import Slider from "./components/Slider";

export default function App() {
  const [count, setCount] = useState(0);
  const handleSlide = (value: number) => {
    setCount((previous) => previous + value);
  };
  return (
    <div>
      <button onClick={() => setCount(0)}>Reset</button>
      <Slider count={count} handleSlide={handleSlide} timeZone="CET" />
      <Slider count={count} handleSlide={handleSlide} timeZone="Asia/Amman" />
      <Slider count={count} handleSlide={handleSlide} timeZone="UTC" />
      <Slider count={count} handleSlide={handleSlide} timeZone="UTC" />
      <Slider count={count} handleSlide={handleSlide} timeZone="UTC" />
      <Slider
        count={count}
        handleSlide={handleSlide}
        timeZone="Africa/Khartoum"
      />
    </div>
  );
}
