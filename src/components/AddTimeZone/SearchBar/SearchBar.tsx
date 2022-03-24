import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
interface Data {
  value: string;
  name: string;
}
interface Props {
  placeholder: string;
  data: Data[];
  handleSearchResult: (result: Data) => void;
}
const SearchBar: React.FC<Props> = ({
  placeholder,
  data,
  handleSearchResult,
}) => {
  const [filteredData, setFilteredData] = useState<Data[] | never[]>([]);
  const [wordEntered, setWordEntered] = useState("");
  const [openDataResult, setOpenDataResult] = useState(false);

  const handleFilter = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    setOpenDataResult(true);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleClick = (key: number) => {
    setWordEntered(filteredData[key].name);
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
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div
                onClick={() => handleClick(key)}
                className="dataItem"
                id={`item${key}`}
              >
                <p>{value.name} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
