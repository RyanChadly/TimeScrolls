import { useState } from "react";
import AddTimeZoneWindow from "./TimeZoneForm/AddTimeZoneWindow";
import "./AddTimeZoneButton.css";
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
      <div className="btn-wrapper">
        <div className="button-plus" onClick={handleClick}>
          +
        </div>
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
