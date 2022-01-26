import React from "react";

import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

//reuseable stuff in function format
const recentItem = (topic) => {
  return (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
        <Avatar
          className="sidebar__avatar"
          src="https://randomuser.me/api/portraits/women/31.jpg"
        />
        <h2>Thrive Collins</h2>
        <h4>anyanwuccollins@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sideBar__statNumber">2,342</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on point</p>
          <p className="sideBar__statNumber">2,342</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("developer")}
        {recentItem("design")}
        {recentItem("software engineering")}
      </div>
    </div>
  );
};

export default SideBar;
