import { useState } from "react";
import { timezones } from "../../../data/timezones";
import SearchBar from "../SearchBar/SearchBar";
import "./AddTimeZoneWindow.css";

const AddTimeZoneWindow = ({ addTimeZone }) => {
  const [name, setName] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const handleSearchResult = (result) => {
    setSearchResult(result);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTimeZone(searchResult);
  };
  return (
    <div className="wrapper">
      <div className="AddTimeZoneWindow">
        <form onSubmit={handleSubmit}>
          <SearchBar
            data={timezones}
            placeholder="Select a timezone"
            handleSearchResult={handleSearchResult}
          />
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={handleNameChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};
export default AddTimeZoneWindow;
