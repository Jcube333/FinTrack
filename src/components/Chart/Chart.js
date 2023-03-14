import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((item) => {
    return item.value;
  });
  const maxVal = Math.max(...valueArray);
  console.log(maxVal);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxVal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
