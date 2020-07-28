import React from "react";
import classes from "./matchstick.module.css";
import match from "./matchstick.png";

export const Matchstick: React.FC = () => {
  return (
    <div className={classes.Matchstick}>
      <img src={match} alt="matchstick"/>
    </div>
  );
};
