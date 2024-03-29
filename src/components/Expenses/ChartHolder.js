import Chart from "../Chart/Chart";

const ChartHolder = (props) => {
  const chartData = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  for (const item of props.items) {
    //Returns the index of month
    //0 for Jan
    //2 for march
    const expenseMonthIndex = item.date.getMonth();

    chartData[expenseMonthIndex].value += item.amount;
  }
  console.log(chartData);

  return <Chart dataPoints={chartData} />;
};

export default ChartHolder;
