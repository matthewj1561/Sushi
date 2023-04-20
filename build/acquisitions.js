import { Chart, registerables } from "./_snowpack/pkg/chartjs.js";

(async function () {
  const data = [
    { gains: "Buff Infant", count: 10 },
    { gains: "Buff Child", count: 15 },
    { gains: "Nice Bod", count: 20 },
    { gains: "Strong", count: 25 },
    { gains: "Jacked", count: 30 },
    { gains: "Swole", count: 35 },
    { gains: "Absolute Unit", count: 40 },
  ];

  Chart.register(...registerables);

  new Chart(document.getElementById("acquisitions"), {
    type: "line",
    data: {
      labels: data.map((row) => row.gains),
      datasets: [
        {
          label: "Gains per Role",
          data: data.map((row) => row.count),
        },
      ],
    },
    options: {
      animation: {
        duration: 20000,
        easing: "linear",
      },
    },
  });
})();
