import { HandleDelete } from "../../App";
import "./ErrorFallbackLabel.scss";

interface ErrorFallbackLabelProps {
  handleDelete: HandleDelete;
  index: number;
}

export const ErrorFallbackLabel = (props: ErrorFallbackLabelProps) => {
  const { handleDelete, index } = props;

  return (
    <div className="fallback-label">
      <div className="fallback-label-text">There was an error</div>
      <button
        className="fallback-label-button"
        onClick={() => handleDelete(index)}
      >
        Delete
      </button>
    </div>
  );
};
