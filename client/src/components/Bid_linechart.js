import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May' , 'June' , 'July', 'August' , 'September', 'Octomber' , 'November' , 'December'],
//     datasets: [
//       {
//         label: 'Bid Transactions',
//         data: [19, 25, 39, 36, 42, 44, 56, 60, 75, 80, 60, 100],
//         backgroundColor: '#6D8D9B',
//       }
//     ],
// };

const options = {
  scales: {
    x: {
      type: "category",
    },
    y: {
      beginAtZero: true,
    },
  },
};

const Bid_linechart = ({ bids }) => {
  console.log("nmmmmmmmmmm" + bids);
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Octomber",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Bid Transactions",
        data: [bids, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#6D8D9B",
      },
    ],
  };

  return (
    <div className="w-1200px h-1000px">
      <Line data={data} options={options} />
    </div>
  );
};

export default Bid_linechart;
