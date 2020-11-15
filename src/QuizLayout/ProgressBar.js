import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const ProgressBar = ({per}) => {
  return <Progress percent={per} />;
};

export default ProgressBar;
