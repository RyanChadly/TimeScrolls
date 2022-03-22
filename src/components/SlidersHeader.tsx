interface IProps {
  title?: string;
}

const SlidersHeader: React.FC<IProps> = ({ title }) => {
  return (
    <div
      className="SlidersHeader"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flexBasis: "15%" }}>{title}</div>

      <div style={{ flexBasis: "85%", textAlign: "center" }}>|</div>
    </div>
  );
};

export default SlidersHeader;
