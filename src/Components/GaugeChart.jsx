// src/Components/GaugeChart.jsx
import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const GaugeChart = ({ score }) => {
  return (
    <div className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/5 mx-auto">
      <CircularProgressbarWithChildren
        value={score}  // score is now directly used as percentage
        styles={buildStyles({
          rotation: 0.75,
          strokeLinecap: 'round',
          trailColor: '#d6d6d6',
          pathColor: `rgba(62, 152, 199, ${score / 100})`,
          textColor: '#f88',
        })}
      >
        <div className="text-2xl sm:text-xl md:text-lg lg:text-xl font-bold mt-[-5px]">
          <strong>{score.toFixed(2)}</strong>/100
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default GaugeChart;
