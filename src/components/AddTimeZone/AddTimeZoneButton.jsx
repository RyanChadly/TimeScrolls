import { useState } from "react";
import AddTimeZoneWindow from "./TimeZoneForm/AddTimeZoneWindow";
import "./AddTimeZoneButton.css";
import { AiOutlinePlus } from "react-icons/ai";
const AddTimeZoneButton = ({ addTimeZone }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="time-zone-wraper">
      <div className="btn-wrapper" onClick={handleClick}>
        <AiOutlinePlus className="button-plus" />
      </div>

      {show && (
        <AddTimeZoneWindow
          addTimeZone={addTimeZone}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};
export default AddTimeZoneButton;
