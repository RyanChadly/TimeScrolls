import { useState } from "react";
import AddTimeZoneWindow from "../TimeZoneForm/AddTimeZoneWindow";
import "./AddTimeZoneButton.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { AddTimeZone } from "../../App";

interface AddTimeZoneButtonProps {
  addTimeZone: AddTimeZone;
}
export type HandleClose = () => void;
const AddTimeZoneButton: React.FC<AddTimeZoneButtonProps> = ({
  addTimeZone,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      {!show && (
        <div className="btn-add-wrapper" onClick={handleClick}>
          <AiOutlinePlus className="button-plus" />
        </div>
      )}

      {show && (
        <AddTimeZoneWindow
          addTimeZone={addTimeZone}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
export default AddTimeZoneButton;
