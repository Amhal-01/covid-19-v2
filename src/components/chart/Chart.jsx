import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ data: { cases, recovered, deaths }, country }) => {
  return !cases ? null : (
    <div>
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              data: [cases, recovered, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country==="world"? "the " : ""}${String(country).charAt(0).toUpperCase() + String(country).slice(1)}` },
        }}
      />
    </div>
  );
};
export default Chart;
