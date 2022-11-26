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

  // let status = 0;
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <ButtonComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
