import React from "react";
import '../styles/DashboardMainContent.css'

const ActivityFeed = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const barHeights = [40, 80, 30, 90, 60, 70, 45];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointments on this week</p>
      </div>
      <div className="activity-chart">
        {days.map((day, index) => (
          <div key={day} className="chart-bar-container">
            <div
              className="chart-bar"
              style={{ height: `${barHeights[index]}%` }}
            ></div>
            <span className="chart-day">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
