import { useEffect, useState } from "react";
import "./App.css";
import AddTimeZoneButton from "./components/AddTimeZone/AddTimeZoneButton";
import Sliders from "./components/Sliders/Sliders";
import { ColorName } from "./data/colors";

export interface Location {
  value: string;
  name: string;
  color: ColorName;
}
export type HandleDelete = (i: number) => void;
export type HandleSlide = (a: number) => void;
export type HandleChangeOrder = (dest: number, orig: number) => void;
export type AddTimeZone = (location: Location) => void;

export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date(Date.now()));
  const [locations, setLocations] = useState<Location[]>([
    {
      value: "America/New_York",
      name: "HQ",
      color: "red",
    },
    { value: "Europe/Warsaw", name: "GDC", color: "yellow" },
    { value: "PRC", name: "CTC", color: "orange" },
  ]);

  const handleChangeOrder = (destination: number, origin: number) => {
    const itemToMove = locations[origin];
    let newArray = locations;
    newArray.splice(origin, 1);
    newArray.splice(destination, 0, itemToMove);
    setLocations(newArray);
  };

  const handleSlide = (value: number) => {
    setCount((previous) => previous + value);
  };

  const handleDelete = (index: number) => {
    setLocations(locations.filter((_location, i) => i !== index));
  };

  const handleReset = () => {
    setCount(0);
    setTime(new Date(Date.now()));
  };

  const addTimeZone = (data: Location) => {
    setLocations([...locations, data]);
    console.log("🚀 ~ file: App.tsx ~ line 52 ~ addTimeZone ~ data", data);
  };

  useEffect(() => {
    setTimeout(() => {
      if (count === 0) {
        setTime(new Date(Date.now()));
      }
    }, 1000);
  }, [time, count]);

  return (
    <div className="app">
      <h1>TimeScrolls</h1>
      {count !== 0 && (
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      )}
      <Sliders
        locations={locations}
        time={time}
        count={count}
        handleDelete={handleDelete}
        handleSlide={handleSlide}
        handleChangeOrder={handleChangeOrder}
      />
      <AddTimeZoneButton addTimeZone={addTimeZone} />
    </div>
  );
}
