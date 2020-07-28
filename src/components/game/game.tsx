import React from "react";
import {Field} from "../field/field";
import {ScoreBoard} from "../score-board/score-board";
import classes from "./game.module.css";

export const Game: React.FC = () => {
  return (
    <div className={classes.Game}>
      <ScoreBoard />
      <Field total_quantity={25}/>
    </div>
  );
};