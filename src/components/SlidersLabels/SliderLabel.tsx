import { useState } from "react";
import { MdDeleteOutline, MdDragIndicator } from "react-icons/md";
import { HandleChangeOrder, HandleDelete, Location } from "../../App";
import "./SliderLabel.css";

interface SliderLabelProp {
  location: Location;
  slidedTime: Date;
  index: number;
  handleDelete: HandleDelete;
  handleChangeOrder: HandleChangeOrder;
}

const SliderLabel: React.FC<SliderLabelProp> = ({
  location,
  slidedTime,
  index,
  handleDelete,
  handleChangeOrder,
}) => {
  const [isGrabbed, setIsGrabbed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dragEntered, setDragEntered] = useState(false);
  const [isGrabbable, setIsGrabbable] = useState(false);
  const handleDragEnd = () => {
    setIsGrabbed(false);
  };
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${index}`);
    setIsGrabbed(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragEntered(false);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragEntered(true);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragEntered(false);
    const data = e.dataTransfer.getData("text");
    handleChangeOrder(index, parseInt(data));
    console.log("drop", index, parseInt(data));
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const setGrabbable = (b: boolean) => {
    setIsGrabbable(b);
  };
  const getStyle = () => {
    if (isGrabbed) {
      return { borderStyle: "solid", borderWidth: "0.1px" };
    }
    if (dragEntered) {
      return { backgroundColor: "white" };
    }
  };
  return (
    <div
      className="lbl-label"
      draggable={isGrabbable ? "true" : "false"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={getStyle()}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="lbl-actions-grabber">
        <MdDragIndicator
          color={isHovered ? "black" : "rgb(231, 231, 231)"}
          cursor={"move"}
          onMouseEnter={() => setGrabbable(true)}
          onMouseLeave={() => setGrabbable(false)}
        />
      </div>

      <div className="lbl-info">
        <div className="lbl-info-title">{location.name}</div>
        <div className="lbl-info-time">
          {slidedTime.toLocaleTimeString("en-GB", {
            timeZone: location.value,
            //   timeZoneName: "short",
          })}
        </div>
        <div className="lbl-info-date">
          {slidedTime.toLocaleDateString("en-GB", {
            timeZone: location.value,
            weekday: "short",
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          })}
        </div>
      </div>
      <div className="lbl-actions-delete">
        <MdDeleteOutline
          onClick={() => handleDelete(index)}
          color={isHovered ? "black" : "rgb(231, 231, 231)"}
        />
      </div>
    </div>
  );
};

export default SliderLabel;
