import React, { useState } from "react";

import ButtonComponent from "./components/ButtonComponent";
import DisplayComponent from "./components/DisplayComponent";

import "./App.css";

const App = () => {
  const [time, setTime] = useState({
    hour: 1,
    minute: 0,
    second: 0,
    milliSecond: 0,
  });

  const [interV, setInterV] = useState();

  const start = () => {
    run();
    setInterV(setInterval(run, 10));
  };

  let updatedHour = time.hour;
  let updatedMinute = time.minute;
  let updatedSecond = time.second;
  let updatedMilliSecond = time.milliSecond;

  const run = () => {
    if (updatedMinute === 60) {
      updatedHour++;
      updatedMinute = 0;
    }

    if (updatedSecond === 60) {
      updatedMinute++;
      updatedSecond = 0;
    }

    if (updatedMilliSecond === 60) {
      updatedSecond++;
      updatedMilliSecond = 0;
    }

    updatedMilliSecond++;

    return setTime({
      hour: updatedHour,
      minute: updatedMinute,
      second: updatedSecond,
      milliSecond: updatedMilliSecond,
    });
  };

  const reset = () => {
    clearInterval(interV);
    setTime({
      hour: 0,
      minute: 0,
      second: 0,
      milliSecond: 0,
    });
  };

  const stop = () => {
    clearInterval(interV);
  };

  const resume = () => {
    start();
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <ButtonComponent
            start={start}
            reset={reset}
            resume={resume}
            stop={stop}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
