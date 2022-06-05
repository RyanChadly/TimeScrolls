import "./ResetButton.scss";
interface ResetButtonProps {
  disabled: boolean;
  handleReset: () => void;
}
const ResetButton: React.FC<ResetButtonProps> = ({ disabled, handleReset }) => {
  return (
    <div className="reset-btn-wrapper">
      {!disabled && (
        <button className="reset-btn" onClick={handleReset} disabled={disabled}>
          Back to the present
        </button>
      )}
    </div>
  );
};
export default ResetButton;
