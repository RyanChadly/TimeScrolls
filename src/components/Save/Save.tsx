import { useEffect, useState } from "react";
import { Location } from "../../App";
import "./Save.css";
import { isEqual } from "lodash";
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

function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname: string) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (const element of ca) {
    let c = element;
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
