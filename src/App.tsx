import { useEffect, useState } from "react";
import Slider from "./components/Slider";
import SlidersHeader from "./components/SlidersHeader";
import "./App.css";
import AddTimeZoneButton from "./components/AddTimeZone/AddTimeZoneButton";
import Sliders from "./components/Sliders";

export interface Location {
  value: string;
  name: string;
}
export type HandleDelete = (i: number) => void;
export type HandleSlide = (a: number) => void;

export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date(Date.now()));
  const [locations, setLocations] = useState<Location[]>([
    { value: "CET", name: "Warsaw" },
    { value: "Asia/Amman", name: "Jordan" },
    { value: "IST", name: "India" },
    {
      value: "America/New_York",
      name: "NY",
    },
  ]);
  const handleSlide = (value: number) => {
    setCount((previous) => previous + value);
  };
  const handleDelete = (index: number) => {
    setLocations(locations.filter((location, i) => i !== index));
  };
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date(Date.now()));
    }, 1000);
  }, [time]);

  const addTimeZone = (data: { value: string; name: string }) => {
    setLocations([...locations, data]);
  };
  return (
    <div style={{ color: "rgb(70, 70, 70)" }}>
      {count !== 0 && (
        <button className="reset-btn" onClick={() => setCount(0)}>
          Reset
        </button>
      )}
      <AddTimeZoneButton addTimeZone={addTimeZone} />

      {/* <SlidersHeader /> */}
      <Sliders
        locations={locations}
        time={time}
        count={count}
        handleDelete={handleDelete}
        handleSlide={handleSlide}
      />
      {/* <SlidersHeader /> */}
    </div>
  );
}
