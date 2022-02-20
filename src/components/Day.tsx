import Hour from "./Hour";
import range from "lodash/range";
import "./Day.css";
interface Props {
  maxWidth: number;
}
const Day: React.FC<Props> = ({ maxWidth }) => {
  const hours: number[] = range(25);

  return (
    <div className="day">
      {hours.map((hour) => (
        <Hour hour={hour} />
      ))}
    </div>
  );
};

export default Day;
