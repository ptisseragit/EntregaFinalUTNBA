import React, { useEffect } from "react";
// npm i chart.js
import Chart from "chart.js";
const Grafico = () => {
  const cr = React.createRef();
  const valores = [Math.ceil(Math.random() * 100),Math.ceil(Math.random() * 100),Math.ceil(Math.random() * 100),Math.ceil(Math.random() * 100)]
  useEffect(() => {
    const ctx = cr.current.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        //labels: ["React", "Blue", "Yellow", "Green", "Purple", "Orange"],
        labels: ["Inteligencia", "Amigabilidad", "Chistosabilidad", "Versohabilidad"],
        datasets: [
          {
            //label: "Caracteristicas",
            //data: [-15, 19, 3, 5, 2, 3],
            data: valores,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        events: ['click'],
        legend: {
          display: false,
      },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
                min: 0,
                stepSize: 20
              },
            },
          ],
        },
      },
    });
  } ,[] );

  return <canvas ref={cr} width="400px" height="100vh"></canvas>;
};

export default Grafico;
