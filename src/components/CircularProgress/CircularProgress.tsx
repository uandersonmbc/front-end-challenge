import "./style.module.css";

export default function CircularProgress(props: any): JSX.Element {
  return (
    <div id="cont" data-pct="100">
      <svg
        id="svg"
        width="200"
        height="200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r="90"
          cx="100"
          cy="100"
          fill="#fff"
          strokeDasharray="565.48"
          strokeDashoffset="20"
        ></circle>
        <circle
          id="bar"
          r="90"
          cx="100"
          cy="100"
          fill="#000"
          strokeDasharray="565.48"
          strokeDashoffset="50"
        ></circle>
      </svg>
    </div>
  );
}
