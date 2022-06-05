import { useEffect, useState } from "react";
import "./App.scss";
import AddTimeZoneButton from "./components/AddTimeZone/AddTimeZoneButton";
import Save from "./components/Save/Save";
import Sliders from "./components/Sliders/Sliders";
import { ColorName } from "./data/colors";
import { getCookie } from "./utils/cookies";
import ResetButton from "./components/ResetButton/ResetButton";

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
  const [locations, setLocations] = useState<Location[]>([
    {
      value: "America/New_York",
      name: "New-York",
      color: "blue",
    },
    { value: "Europe/Paris", name: "Paris", color: "green" },
    { value: "Asia/Calcutta", name: "New-Delhi", color: "red" },
    { value: "PRC", name: "Shanghai", color: "yellow" },
  ]);
  const [time, setTime] = useState(new Date(Date.now()));

  const handleChangeOrder = (destination: number, origin: number) => {
    const itemToMove = locations[origin];
    let newArray = locations;
    newArray.splice(origin, 1);
    newArray.splice(destination, 0, itemToMove);
    setLocations([...newArray]);
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
  };

  useEffect(() => {
    setTimeout(() => {
      if (count === 0) {
        setTime(new Date(Date.now()));
      }
    }, 1000);
  }, [time, count]);

  useEffect(() => {
    const cachedLocation = getCookie("locations");
    if (cachedLocation !== "") {
      setLocations(JSON.parse(cachedLocation));
    }
  }, []);

  return (
    <div className="app">
      <h1>TimeScrolls</h1>
      <ResetButton disabled={count === 0} handleReset={handleReset} />
      <Sliders
        locations={locations}
        time={time}
        count={count}
        handleDelete={handleDelete}
        handleSlide={handleSlide}
        handleChangeOrder={handleChangeOrder}
      />
      <Save locations={locations} />
      <AddTimeZoneButton addTimeZone={addTimeZone} />
    </div>
  );
}
