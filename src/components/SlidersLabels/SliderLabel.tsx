import { useState } from "react";
import { MdDragIndicator } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { HandleChangeOrder, HandleDelete, Location } from "../../App";
import { colors } from "../../data/colors";
import "./SliderLabel.scss";

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
  };

  const getBackgroundStyle = () => {
    const color = colors.find((color) => color.name === location.color);
    return `linear-gradient(45deg, ${color?.mediumDark} 0%, ${color?.mediumDark} 100%)`;
  };

  const getStyle = () => {
    if (isGrabbed) {
      return {
        borderStyle: "solid",
        borderWidth: "0.1px",
        background: getBackgroundStyle(),
      };
    }
    if (dragEntered) {
      return {
        backgroundColor: colors.find((color) => color.name === location.color)
          ?.base,
      };
    }
    return {
      background: getBackgroundStyle(),
    };
  };
  return (
    <div
      className="lbl-label"
      draggable={isGrabbable ? "true" : "false"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={getStyle()}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="lbl-actions-grabber">
        <MdDragIndicator
          opacity={isHovered ? 1 : 0}
          cursor={"move"}
          onMouseEnter={() => setIsGrabbable(true)}
          onMouseLeave={() => setIsGrabbable(false)}
        />
      </div>

      <div className="lbl-info">
        <div className="lbl-info-title">{location.name}</div>
        <div className="lbl-info-time">
          {slidedTime.toLocaleTimeString("en-GB", {
            timeZone: location.value,
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
        <TiDeleteOutline
          cursor={"point"}
          onClick={() => handleDelete(index)}
          opacity={isHovered ? 1 : 0}
        />
      </div>
    </div>
  );
};

export default SliderLabel;
