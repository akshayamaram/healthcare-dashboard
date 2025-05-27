import React from 'react'
import '../styles/Header.css'
import { Search, Bell, Plus } from "lucide-react";
// import { Bell } from "lucide-solid";
import { FaBell } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="header">
      <div className="h-left">
        <h3>
          Health<span>Care.</span>
        </h3>
      </div>
      <div className="h-centre">
        <div className="search-box">
          <div className="search-input">
            <Search size={19}/>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="bell">
          <FaBell style={{color: "#3736A8"}}/>
        </div>
      </div>
      <div className="h-right">
        <div className="profile-icon">
          👨‍🦰
        </div>
        <div className="plus">
          <HiOutlinePlus/>
        </div>
      </div>
    </div>
  );
}

export default Header