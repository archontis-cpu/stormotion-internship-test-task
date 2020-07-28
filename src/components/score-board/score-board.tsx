import React from "react";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classes from "./score-board.module.css";

export const ScoreBoard: React.FC = () => {
  return (
    <div className={classes.ScoreBoard}>
      <Typography className={classes.Typography}>
        <span>AI score</span>
        <span>4</span>
      </Typography>
      <Divider />
      <Typography className={classes.Typography}>
        <span>Your score</span>
        <span>2</span>
      </Typography>
      <Divider />
      <Typography className={classes.Typography}>
        <span>Matches left</span>
        <span>2</span>
      </Typography>
      <Divider />
    </div>
  );
};