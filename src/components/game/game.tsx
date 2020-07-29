import React, {useState} from "react";
import {Field} from "../field/field";
import {ScoreBoard} from "../score-board/score-board";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import classes from "./game.module.css";

const initialSliderState = 1;

export const Game: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(initialSliderState);

  return (
    <div className={classes.Game}>
      <ScoreBoard />
      <Field total_quantity={25} />
      <Slider
        defaultValue={1}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={1}
        max={10}
        style={{
          width: 250,
        }}
        onChange={(event, value): void => {
          // @ts-ignore
          setSliderValue(value);
        }}
      />
      <Button variant="contained" color="primary" style={{width: 170}}>
        Take {sliderValue} match{sliderValue > 1? 'es' : null} !
      </Button>
    </div>
  );
};
