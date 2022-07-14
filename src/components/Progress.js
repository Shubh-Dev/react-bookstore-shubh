import React, { useState, useEffect } from 'react';
import './scss/Progress.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div className="progress-container d_flex_r g10">
      <div className="circle-wrap">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div className="percentage_container">
        <h3 className="percent-progress">100%</h3>
        <p className="complete">Completed</p>
      </div>
    </div>
  );
};

export default Progress;
