import React from "react";
import { navigationItems } from "../data/navigationData";
import '../styles/Sidebar.css'
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">General</h3>
        <nav className="sidebar-nav">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`nav-item ${index === 0 ? "active" : ""}`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="sidebar-section">
        <h3 className="sidebar-title">Tools</h3>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item">
            <IoChatbubbleEllipsesSharp size={18}/>
            <span>Chat</span>
          </a>
          <a href="#" className="nav-item">
            <FaPhone size={18}/>
            <span>Support</span>
          </a>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <a href="#" className="nav-item">
          <IoSettings size={18}/>
          <span>Setting</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
