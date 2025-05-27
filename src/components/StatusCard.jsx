import React from "react";

const HealthStatusCards = ({ data }) => {
  return (
    <div className="health-status-cards">
      {data.map((item, index) => (
        <div key={index} className="health-card">
          <div className="health-icon">
            <div>{item.icon}</div>
          </div>
          <div className="health-info">
            <h4>{item.title}</h4>
            <p className="health-date">{item.date}</p>
            <div className={`health-progress ${item.status}`}>
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
