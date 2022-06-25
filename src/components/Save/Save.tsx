import { useEffect, useState } from "react";
import { Location } from "../../App";
import "./Save.scss";
import { isEqual } from "lodash";
import { useLocalStorageState } from "../../utils/local-storage";
interface SaveProps {
  locations: Location[];
}

const Save: React.FC<SaveProps> = ({ locations }) => {
  const [visible, setVisible] = useState(false);
  const [originalLocations] = useState(locations);
  const [storedLocations, setStoredLocations] =
    useLocalStorageState("locations");

  const handleSave = () => {
    setStoredLocations(locations);
    setVisible(false);
  };

  useEffect(() => {
    storedLocations
      ? setVisible(!isEqual(locations, storedLocations))
      : setVisible(originalLocations !== locations);
  }, [locations, originalLocations, storedLocations]);

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
