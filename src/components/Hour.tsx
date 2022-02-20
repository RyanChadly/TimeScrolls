import "./Hour.css";
interface Props {
  hour: number;
}

const Hour: React.FC<Props> = ({ hour }) => {
  return (
    <span className="hour" style={{ border: "solid" }}>
      {hour}
    </span>
  );
};

export default Hour;
