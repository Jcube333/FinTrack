import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillPercentage = "0%";

  if (props.maxValue > 0) {
    barFillPercentage = Math.round((props.value / props.maxValue) * 100) + "%";

    console.log(props.label);
    console.log(props.value);
    console.log(barFillPercentage);
  }

  console.log(barFillPercentage);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillPercentage }}
        ></div>
      </div>

      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
