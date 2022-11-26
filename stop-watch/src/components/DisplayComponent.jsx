import React from "react";

const DisplayComponent = (props) => {
  const hourDisplay = () => {
    if (props.time.hour === 0) {
      return "";
    } else {
      return (
        <span>
          {props.time.hour >= 10 ? props.time.hour : "0" + props.time.hour}
        </span>
      );
    }
  };

  return (
    <div>
      {hourDisplay()} &nbsp;&nbsp;
      <span>
        {props.time.minute >= 10 ? props.time.minute : "0" + props.time.minute}
      </span>{" "}
      &nbsp;&nbsp;
      <span>
        {props.time.second >= 10 ? props.time.second : "0" + props.time.second}
      </span>{" "}
      &nbsp;&nbsp;
      <span>
        {props.time.milliSecond >= 10
          ? props.time.milliSecond
          : "0" + props.time.milliSecond}
      </span>{" "}
      &nbsp;&nbsp;
    </div>
  );
};

export default DisplayComponent;
