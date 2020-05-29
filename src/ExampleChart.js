import { Chart } from "react-google-charts";
import * as React from "react";
import { render } from "react-dom";
 
const ExampleChart = () => {
    const chartEvents = [
        {
          eventName: "select",
          callback({ chartWrapper }) {
            console.log("Selected ", chartWrapper.getChart().getSelection());
          }
        }
      ];
    return (
      <Chart
        chartType="ScatterChart"
        rows={[[8, 12], [4, 5.5], [11, 14], [4, 5], [3, 3.5], [6.5, 7]]}
        columns={[
          {
            type: "number",
            label: "Age"
          },
          {
            type: "number",
            label: "Weight"
          }
        ]}
        options={
          // Chart options
          {
            title: "Age vs. Weight comparison",
            hAxis: {
              title: "Age",
              viewWindow: { min: 0, max: 15 }
            },
            vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
            legend: "none"
          }
        }
        width={"100%"}
        height={"400px"}
        legendToggle
        chartEvents={chartEvents}
      />
    );
  };
 export default  ExampleChart;