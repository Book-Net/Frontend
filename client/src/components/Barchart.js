import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);


const data = {
    labels: ['January', 'February', 'March', 'April', 'May' , 'June' , 'July', 'August' , 'September', 'Octomber' , 'November' , 'December'],
    datasets: [
      {
        label: 'All Transactions',
        data: [650, 700, 940, 810, 563, 679, 1003, 1100, 1095, 1220, 1660, 2000],
        backgroundColor: '#6D8D9B',
      }
    ],
};

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

const Barchart = () => {
    return (
      <div className='w-2000px h-1200px'>
        <Bar data={data} options={options} />
      </div>
    );
};
  

export default Barchart;