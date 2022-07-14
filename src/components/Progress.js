import React from 'react';
import './scss/Progress.scss';

const Progress = () => (
  <div className="progress-container d_flex_r g10">
    <div className="circle-wrap">
      <div className="circle" />
    </div>
    <div className="percentage_container">
      <h3 className="percent-progress">100%</h3>
      <p className="complete">Completed</p>
    </div>
  </div>
);

export default Progress;
