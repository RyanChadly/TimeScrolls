import { useEffect, useState } from "react";
import { Location } from "../../App";
import "./Save.scss";
import { isEqual } from "lodash";
import { getCookie, setCookie } from "../../utils/cookies";
interface SaveProps {
  locations: Location[];
}

const Save: React.FC<SaveProps> = ({ locations }) => {
  const [visible, setVisible] = useState(false);
  const [originalLocations] = useState(locations);
  const handleSave = () => {
    setCookie("locations", JSON.stringify(locations), 365);
    setVisible(false);
  };

  useEffect(() => {
    const cachedLocation = getCookie("locations");
    if (cachedLocation !== "") {
      setVisible(!isEqual(locations, JSON.parse(cachedLocation)));
    } else {
      if (originalLocations === locations) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  }, [locations, originalLocations]);

  return (
    <div className="save-wrapper">
      {visible && (
        <div className="save" onClick={handleSave}>
          Save
        </div>
      )}
    </div>
  );
};

export default Save;
