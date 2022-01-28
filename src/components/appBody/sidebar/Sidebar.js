import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
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
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={user.photoUrl ? user.photoUrl : user.displayName[0]} alt="" />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
