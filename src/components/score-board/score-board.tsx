import React, {useContext} from "react";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classes from "./score-board.module.css";
import {Context} from "../../App";

export const ScoreBoard: React.FC = () => {
  // @ts-ignore
  const { state } = useContext(Context);

  return (
    <div className={classes.ScoreBoard}>
      <Typography className={classes.Typography}>
        <span>AI score</span>
        <span>{state.AI_SCORE}</span>
      </Typography>
      <Divider />
      <Typography className={classes.Typography}>
        <span>Your score</span>
        <span>{state.PERSON_SCORE}</span>
      </Typography>
      <Divider />
      <Typography className={classes.Typography}>
        <span>Matches left</span>
        <span>{state.MATCHES_LEFT}</span>
      </Typography>
      <Divider />
    </div>
  );
};