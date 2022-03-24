import { useState } from "react";
import AddTimeZoneWindow from "./TimeZoneForm/AddTimeZoneWindow";
import { AiOutlinePlusSquare, AiOutlineCloseSquare } from "react-icons/ai";
import "./AddTimeZoneButton.css";
const AddTimeZoneButton = ({ addTimeZone }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="time-zone-wraper">
      <div className="btn-wrapper">
        <div id="paddingLeft"></div>
        <div className="btn-popup" onClick={handleClick}>
          <div className="addIcon">
            {show ? <AiOutlineCloseSquare /> : <AiOutlinePlusSquare />}
          </div>

          <div id="addPhrase">Add new timezone</div>
        </div>
      </div>

      {show && <AddTimeZoneWindow addTimeZone={addTimeZone} />}
    </div>
  );
};
export default AddTimeZoneButton;
