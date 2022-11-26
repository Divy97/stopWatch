import React from "react";

const ButtonComponent = ({ start, reset, stop, resume }) => {
  return (
    <div>
      <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
        Start
      </button>
      <button className="stopwatch-btn stopwatch-btn-red" onClick={reset}>
        Reset
      </button>
      <button className="stopwatch-btn stopwatch-btn-yel" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

export default ButtonComponent;
