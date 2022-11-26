import React, { useState } from "react";

import ButtonComponent from "./components/ButtonComponent";
import DisplayComponent from "./components/DisplayComponent";

import "./App.css";

const App = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
    milliSecond: 0,
  });

  const [interv, setInterv] = useState();

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
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
    clearInterval(interv);
    setTime({
      hour: 0,
      minute: 0,
      second: 0,
      milliSecond: 0,
    });
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <ButtonComponent start={start} reset={reset} />
        </div>
      </div>
    </div>
  );
};

export default App;
