import React, {useContext, useState} from "react";
import {Field} from "../field/field";
import {ScoreBoard} from "../score-board/score-board";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import classes from "./game.module.css";
import {Context} from "../../App";
import {Typography} from "@material-ui/core";

const initialSliderState = 1;

export const Game: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(initialSliderState);
  //@ts-ignore
  const { state, dispatch } = useContext(Context);

  const max =
    state.SETTINGS.MAX_MATCHES_PER_TURN <
    state.SETTINGS.INITIAL_MATCHES_COUNT
      ? state.SETTINGS.MAX_MATCHES_PER_TURN
      : state.SETTINGS.INITIAL_MATCHES_COUNT;

  const humanTurnHandler = (event:any) => {
    event.preventDefault();
    dispatch({type: "HUMAN_TURNED", payload: sliderValue});
    console.log(event);
  };


  return (
    <div className={classes.Game}>
      <ScoreBoard />
      <Field total_quantity={state.SETTINGS.INITIAL_MATCHES_COUNT} />
      <div style={{
        display: "flex",
        width: 300,
        justifyContent: "space-between",
      }}>
        <Typography>
          1
        </Typography>
        <Slider
          defaultValue={1}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={max}
          style={{
            width: 250,
          }}
          onChangeCommitted={(event, value:any): void => {
            setSliderValue(value);
          }}
        />
        <Typography>
          {max}
        </Typography>
      </div>

      <Button
        variant="contained"
        color="primary"
        style={{width: 170}}
        onClick={event => humanTurnHandler(event)}>
        Take {sliderValue} match{sliderValue > 1? 'es' : null} !
      </Button>
    </div>
  );
};
