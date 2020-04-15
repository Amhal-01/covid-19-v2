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
              label: "People",
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
          legend: { display: true },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    </div>
  );
};
export default Chart;
