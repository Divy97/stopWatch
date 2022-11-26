import React from "react";

const ButtonComponent = ({ start, reset }) => {
  return (
    <div>
      <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
        Start
      </button>
      <button className="stopwatch-btn stopwatch-btn-red" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ButtonComponent;
