import { useEffect, useState } from "react";
import Slider from "./components/Slider";
import SlidersHeader from "./components/SlidersHeader";

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
  const sliderData = [
    { timeZone: "CET", name: "Warsaw" },
    { timeZone: "Asia/Amman", name: "Jordan" },
    { timeZone: "IST", name: "India" },
    { timeZone: "America/New_York", name: "NY" },
  ];
  return (
    <div style={{ color: "rgb(70, 70, 70)" }}>
      <button onClick={() => setCount(0)}>Reset</button>
      <SlidersHeader />
      {sliderData.map((data) => (
        <Slider
          count={count}
          handleSlide={handleSlide}
          timeZone={data.timeZone}
          time={time}
          name={data.name}
        />
      ))}
      <SlidersHeader />
    </div>
  );
}
