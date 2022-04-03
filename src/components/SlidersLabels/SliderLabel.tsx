import { MdDeleteOutline, MdDragIndicator } from "react-icons/md";
import { HandleDelete, Location } from "../../App";
import "./SliderLabel.css";

interface SliderLabelProp {
  location: Location;
  slidedTime: Date;
  index: number;
  handleDelete: HandleDelete;
}

const SliderLabel: React.FC<SliderLabelProp> = ({
  location,
  slidedTime,
  index,
  handleDelete,
}) => {
  return (
    <div className="lbl-label">
      <div className="lbl-actions-grabber" draggable="true">
        <MdDragIndicator />
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
        <MdDeleteOutline onClick={() => handleDelete(index)} />
      </div>
    </div>
  );
};

export default SliderLabel;
