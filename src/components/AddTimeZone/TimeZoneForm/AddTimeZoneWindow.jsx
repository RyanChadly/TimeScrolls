import { useState } from "react";
import { timezones } from "../../../data/timezones";
import SearchBar from "../SearchBar/SearchBar";
import "./AddTimeZoneWindow.css";

const AddTimeZoneWindow = ({ addTimeZone, handleClose }) => {
  const [name, setName] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const handleSearchResult = (result) => {
    setSearchResult(result);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    if (name !== "") {
      setSearchResult({ ...searchResult, name: name });
      console.log(searchResult);
    }
    addTimeZone(searchResult);
  };
  const handleClick = (e) => {
    if (e.target.className === "form-wrapper") {
      handleClose();
      console.log(e.target.className);
    }
  };

  return (
    <div className="form-wrapper" onClick={handleClick}>
      <form className="add-time-zone-form" onSubmit={handleSubmit}>
        <input
          className="name-input add-time-zone-form-control"
          type="text"
          value={name}
          placeholder="Name (Optional)"
          onChange={handleNameChange}
        />
        <SearchBar
          className="timezone-input add-time-zone-form-control"
          data={timezones}
          placeholder="Select a timezone"
          handleSearchResult={handleSearchResult}
        />
        <input
          className="submit-btn add-time-zone-form-control"
          type="submit"
          value="Add"
          disabled={!searchResult.value}
        />
      </form>
    </div>
  );
};
export default AddTimeZoneWindow;
