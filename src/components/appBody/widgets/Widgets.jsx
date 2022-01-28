import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";

const newArticle = (heading, subtitle) => (
  <div className="widgets_article">
    <div className="widgets__articleLeft">
      <FiberManualRecordIcon />
    </div>
    <div className="widgets__articleRight">
      <h4>{heading}</h4>
      <p>{subtitle}</p>
    </div>
  </div>
);

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("React 17 is out", "Code - 879 readers")}
      {newArticle("Tesla hits new high", "Cars & auto - 452 readers")}
      {newArticle("Corona virus Canada updates", "Top news - 1002 readers")}
      {newArticle("Bitcoin creates new ATH", "Crypto - 3861 readers")}
      {newArticle("Is Redux outdated", "Code - 258 readers")}
    </div>
  );
};

export default Widgets;
