import React, { useState } from "react";
import "./SearchBar.scss";
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

  const handleFilter = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.value?.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    handleSearchResult({});
  };

  const handleClick = (key: number) => {
    if (filteredData[key].value !== undefined) {
      setWordEntered(filteredData[key].value as string);
    }
    setFilteredData([]);
    handleSearchResult(filteredData[key]);
  };

  const resultHeight = filteredData.length < 6 ? filteredData.length * 40 : 200;

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
      {
        <div
          className="dataResult"
          style={{
            height: resultHeight,
          }}
        >
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
      }
    </div>
  );
};

export default SearchBar;
