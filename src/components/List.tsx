import React from "react";
interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
            <p>{person.age} years old</p>
            <p className="List-note">{person.note}</p>
          </div>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
