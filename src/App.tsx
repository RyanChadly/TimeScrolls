import { useEffect, useState } from "react";
import Slider from "./components/Slider";
import SlidersHeader from "./components/SlidersHeader";
import "./App.css";
import AddTimeZoneButton from "./components/AddTimeZone/AddTimeZoneButton";
export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date(Date.now()));
  const [sliderData, setSliderData] = useState([
    { value: "CET", name: "Warsaw" },
    { value: "Asia/Amman", name: "Jordan" },
    { value: "IST", name: "India" },
    { value: "America/New_York", name: "NY" },
  ]);
  const handleSlide = (value: number) => {
    setCount((previous) => previous + value);
  };

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date(Date.now()));
    }, 1000);
  }, [time]);

  const addTimeZone = (data: { value: string; name: string }) => {
    setSliderData([...sliderData, data]);
  };
  return (
    <div style={{ color: "rgb(70, 70, 70)" }}>
      {count !== 0 && (
        <button className="reset-btn" onClick={() => setCount(0)}>
          Reset
        </button>
      )}
      <AddTimeZoneButton addTimeZone={addTimeZone} />

      <SlidersHeader />
      {sliderData.map((data) => (
        <Slider
          count={count}
          handleSlide={handleSlide}
          timeZone={data.value}
          time={time}
          name={data.name}
        />
      ))}
      <SlidersHeader />
    </div>
  );
}
