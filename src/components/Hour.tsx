import "./Hour.css";
interface Props {
  hour: number;
  minutes: number;
  current: boolean;
}

const Hour: React.FC<Props> = ({ hour, minutes, current }) => {
  return (
    <span
      className={`hour ${current ? "current" : ""}`}
      style={{ flex: minutes }}
      id={`h${hour}`}
    >
      {hour}
    </span>
  );
};

export default Hour;
