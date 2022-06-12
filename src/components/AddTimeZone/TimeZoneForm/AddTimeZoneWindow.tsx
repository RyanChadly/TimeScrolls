import { useState } from "react";
import { Timezone, timezones } from "../../../data/timezones";
import SearchBar from "./SearchBar/SearchBar";
import "./AddTimeZoneWindow.scss";
import ColorSelector from "./ColorSelector/ColorSelector";
import { AddTimeZone } from "../../../App";
import { HandleClose } from "../AddTimeZoneButton";
import { ColorName, defaultColorName } from "../../../data/colors";
import { IoCloseOutline } from "react-icons/io5";

interface AddTimeZoneWindowProps {
  addTimeZone: AddTimeZone;
  handleClose: HandleClose;
}
const AddTimeZoneWindow: React.FC<AddTimeZoneWindowProps> = ({
  addTimeZone,
  handleClose,
}) => {
  const [name, setName] = useState("");
  const [searchResult, setSearchResult] = useState<Timezone>({});
  const [colorName, setColorName] = useState<ColorName>(defaultColorName);

  const handleSearchResult = (result: Timezone) => {
    setSearchResult(result);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setSearchResult({ ...searchResult, name: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchResult.value) {
      if (name !== "") {
        addTimeZone({
          value: searchResult.value,
          name: name,
          color: colorName,
        });
      } else {
        addTimeZone({
          value: searchResult.value,
          name: searchResult.value,
          color: colorName,
        });
      }
    }
  };

  const handleClick = (e: any) => {
    if (e.target.className === "form-wrapper") {
      handleClose();
    }
  };

  const handleColorChange = (c: ColorName) => {
    setColorName(c);
  };

  return (
    <div className="form-wrapper" onClick={handleClick}>
      <div className="add-time-zone-window">
        <span className="add-time-zone-title">Add a new timezone</span>
        <span className="close">
          <IoCloseOutline className="delete-icon" onClick={handleClose} />
        </span>
        <form className="add-time-zone-form" onSubmit={handleSubmit}>
          <SearchBar
            data={timezones}
            placeholder="Timezone"
            handleSearchResult={handleSearchResult}
          />
          <input
            className="name-input add-time-zone-form-control"
            type="text"
            value={name}
            placeholder="Name"
            onChange={handleNameChange}
          />
          <ColorSelector handleChange={handleColorChange} />
          <input
            className="submit-btn add-time-zone-form-control"
            type="submit"
            value="Add"
            disabled={!searchResult.value}
          />
        </form>
      </div>
    </div>
  );
};
export default AddTimeZoneWindow;
