import React from "react";
import Chart from "react-google-charts";

export default function MyChart({ stockObj, stockSym }) {
  let StockData = [["day-time", "open", "close", "low", "high"]];

  for (let property in stockObj) {
    const hour = property.split(" ")[1].split(":")[0];
    const minute = property.split(" ")[1].split(":")[1];
    const day = property.split(" ")[0].split("-")[2];
    const dayHourMin = day + "." + hour + minute;

    const record = [
      dayHourMin,
      parseFloat(stockObj[property]["1. open"]),
      parseFloat(stockObj[property]["2. high"]),
      parseFloat(stockObj[property]["3. low"]),
      parseFloat(stockObj[property]["4. close"]),
    ];

    StockData.push(record);
  }

  StockData.sort(([a], [b]) => a - b || b - a);

  // Data Format for reference
  //  //  //  //  //  //  //  //  //  //  //  //  //  //
  // const data = [
  //   ["Year", "Sales", "Expenses", "Somethingelse"],
  //   ["2004", 1000, 400, 230],
  //   ["2005", 1170, 460, 390],
  //   ["2006", 660, 1120, 730],
  //   ["2007", 1030, 540, 230],
  // ];
  //  //  //  //  //  //  //  //  //  //  //  //  //  //

  const options = {
    title: `${stockSym.toUpperCase()} Stock Performance`,
    curveType: "function",
    legend: { position: "top" },
  };

  return (
    <div className='search-chart'>
      <Chart
        chartType='LineChart'
        width='100%'
        height='400px'
        data={StockData}
        options={options}
      />
    </div>
  );
}
