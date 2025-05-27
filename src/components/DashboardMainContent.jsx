import React from "react";
import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import CalenderView from "./CalenderView";
import '../styles/DashboardMainContent.css'
import '../styles/CalenderView.css'

const DashboardMainContent = () => {
  return (
    <div className="main-content">
      <div className="overview-feed-wrapper">
        <DashboardOverview />
        <ActivityFeed/>
      </div>
    </div>
  );
};

export default DashboardMainContent;
