// src/Components/FeedbackSection.jsx
import React from 'react';

const FeedbackSection = ({ title, score, comment }) => {
  return (
    <div className="feedback-section">
      <div className="feedback-header">
        <span>{title}</span>
        <div className="circle" style={{ '--percentage': score }}>
          <span>{score}%</span>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default FeedbackSection;
