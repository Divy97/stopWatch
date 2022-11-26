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
      <button className="stopwatch-btn stopwatch-btn-red" onClick={stop}>
        Stop
      </button>
      <button className="stopwatch-btn stopwatch-btn-red" onClick={resume}>
        Resume
      </button>
    </div>
  );
};

export default ButtonComponent;
