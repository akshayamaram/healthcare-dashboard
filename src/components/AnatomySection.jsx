import React from "react";
import StatusCard from "./StatusCard";
import { healthStatusData } from "../data/healthData";
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import anatomyfig from '../assets/anatomyfig.png'
import { LuScanText } from "react-icons/lu";
import { BiScan } from "react-icons/bi";
import { ScanLine } from "lucide-react";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="titles">
        <h3>Dashboard</h3>
        <h6>
          This Week{" "}
          <span>
            <IoIosArrowDown />
          </span>
        </h6>
      </div>
      <div className="anatomy-container">
        <div className="anatomy-figure-wrapper">
          <div className="magnify">
            <HiMiniMagnifyingGlassPlus />
          </div>
          <img src={anatomyfig} alt="anatomyfigure" />

          {/* Heart Icon and Label */}
          <ScanLine className="scan-icon heart-icon"  />
          <div className="health-label-heart heart-label">❤️ Healthy Heart</div>

          {/* Leg Icon and Label */}
          <ScanLine className="scan-icon leg-icon" />
          <div className="health-label-leg leg-label">🦵 Healthy Leg</div>
        </div>
        <div className="status-cards">
          <StatusCard data={healthStatusData}/>
        </div>
      </div>
      {/* <div className="detail-text">Details </div> */}
    </div>
  );
};

export default AnatomySection;
