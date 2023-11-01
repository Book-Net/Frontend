import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import axios from 'axios';

Chart.register(CategoryScale);



// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May' , 'June' , 'July', 'August' , 'September', 'Octomber' , 'November' , 'December'],
//     datasets: [
//       {
//         label: 'Sales Transactions',
//         data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         backgroundColor: '#6D8D9B',
//       }
//     ],
// };


const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
};

function Sales_linechart({sales}){

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May' , 'June' , 'July', 'August' , 'September', 'Octomber' , 'November' , 'December'],
    datasets: [
      {
        label: 'Sales Transactions',
        data: [sales, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#6D8D9B',
      }
    ],
};  

    return (
      <div className='w-1200px h-1000px'>
        <Line data={data} options={options} />
      </div>
    );
};
  

export default Sales_linechart;