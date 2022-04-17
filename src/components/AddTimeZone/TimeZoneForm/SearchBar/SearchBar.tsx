import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Timezone } from "../../../../data/timezones";

interface Props {
  placeholder: string;
  data: Timezone[];
  handleSearchResult: (result: Timezone) => void;
}
const SearchBar: React.FC<Props> = ({
  placeholder,
  data,
  handleSearchResult,
}) => {
  const [filteredData, setFilteredData] = useState<Timezone[]>([]);
  const [wordEntered, setWordEntered] = useState("");
  const [openDataResult, setOpenDataResult] = useState(false);

  const handleFilter = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.value?.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
      setOpenDataResult(false);
    } else {
      setFilteredData(newFilter);
      setOpenDataResult(true);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    handleSearchResult({});
    setOpenDataResult(false);
  };
  const handleClick = (key: number) => {
    if (filteredData[key].value !== undefined) {
      setWordEntered(filteredData[key].value as string);
    }
    setOpenDataResult(false);
    handleSearchResult(filteredData[key]);
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <AiOutlineSearch />
          ) : (
            <AiOutlineClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {openDataResult && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div
                onClick={() => handleClick(key)}
                className="dataItem"
                key={`item${key}`}
              >
                <p>{`${value.value}`} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
