import { useEffect, useState } from "react";
import Slider from "./components/Slider";

export default function App() {
  const [count, setCount] = useState(0);

  const [time, setTime] = useState(new Date(Date.now()));

  const handleSlide = (value: number) => {
    setCount((previous) => previous + value);
  };

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date(Date.now()));
    }, 1000);
  }, [time]);

  return (
    <div>
      <button onClick={() => setCount(0)}>Reset</button>
      <Slider
        count={count}
        handleSlide={handleSlide}
        timeZone="CET"
        time={time}
      />
      <Slider
        count={count}
        handleSlide={handleSlide}
        timeZone="Asia/Amman"
        time={time}
      />
    </div>
  );
}
