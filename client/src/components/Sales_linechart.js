import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);


const data = {
    labels: ['January', 'February', 'March', 'April', 'May' , 'June' , 'July', 'August' , 'September', 'Octomber' , 'November' , 'December'],
    datasets: [
      {
        label: 'Sales Transactions',
        data: [94, 155, 169, 186, 163, 214, 196, 210, 245, 320, 260, 400],
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

const Sales_linechart = () => {
    return (
      <div className='w-1200px h-1000px'>
        <Line data={data} options={options} />
      </div>
    );
};
  

export default Sales_linechart;