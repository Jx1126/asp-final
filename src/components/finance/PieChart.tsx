import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title?: string;
  labels: string[];
  data: number[];
  backgroundColors: string[];
}

const PieChart: React.FC<PieChartProps> = ({ title, labels, data, backgroundColors }) => {
  const chartData = {
      labels: labels,
      datasets: [{
          data: data,
          backgroundColor: backgroundColors,
      }],
  };

  return (
      <div className="text-center">
          {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
          <Pie data={chartData} />
      </div>
  );
};

export default PieChart;