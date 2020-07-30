import React, {useContext, useState} from "react";
import {Field} from "../field/field";
import {ScoreBoard} from "../score-board/score-board";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import classes from "./game.module.css";
import {Context} from "../../App";
import {Typography} from "@material-ui/core";

const initialSliderState = 1;

const getRandomInt = (min:number, max:number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const Game: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(initialSliderState);

  //@ts-ignore
  const { state, dispatch } = useContext(Context);

  const humanTurnHandler = (event:any) => {

    event.preventDefault();

    dispatch({type: "HUMAN_TURNED", payload: sliderValue});

    if (sliderValue === state.MATCHES_LEFT) {
      const result = state.AI_SCORE % 2 === 0 ? 0 : 1;
      dispatch({type: "GAME_OVER", payload: result});
    } else {
      const result = state.AI_SCORE % 2 === 0 ? 0 : 1;
      dispatch({type: "GAME_OVER", payload: result});
    }
    console.log('slider', sliderValue);
    AITurnHandler();
  };

  const AITurnHandler = () => {
    let turn: number;

    const current = state.MATCHES_LEFT - sliderValue;
    if (current === 0) {
      const result = state.AI_SCORE % 2 === 0 ? 0 : 1;
      dispatch({type: "GAME_OVER", payload: result});
      return;
    } else if (state.MATCHES_LEFT - sliderValue === 0) {
      turn = 1;
    } else if (current < state.SETTINGS.MAX_MATCHES_PER_TURN) {
      turn = current;
    } else {
      turn = getRandomInt(1, state.SETTINGS.MAX_MATCHES_PER_TURN);
    }

    dispatch({type: "AI_TURNED", payload: turn});
  };

  const sliderMaxValueHelper = (): number => {
    return state.SETTINGS.MAX_MATCHES_PER_TURN < state.MATCHES_LEFT
      ? state.SETTINGS.MAX_MATCHES_PER_TURN : state.MATCHES_LEFT;
  };

  const buttonTextHelper = () => {
    return sliderValue <= sliderMaxValueHelper()
      ? sliderValue : sliderMaxValueHelper();
  };

  return (
    <div className={classes.Game}>
      <ScoreBoard />
      { state.MATCHES_LEFT <= 1 ? null :
        <div style={{
          display: "flex",
          marginTop: 20,
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
            value={sliderValue}
            step={1}
            min={1}
            max={ sliderMaxValueHelper() }
            style={{
              width: 250,
            }}
            onChangeCommitted={(event, value:any): void => {
              setSliderValue(value);
            }}
          />
          <Typography>
            { sliderMaxValueHelper() }
          </Typography>
        </div>
      } { state.MATCHES_LEFT <= 0 ? null :
        <Button
          variant="contained"
          color="primary"
          style={{width: 170, marginTop: 20}}
          onClick={event => humanTurnHandler(event)}>
          Take { buttonTextHelper() } match{ buttonTextHelper() > 1? 'es' : null} !
        </Button>
      }
      <Field total_quantity={state.SETTINGS.INITIAL_MATCHES_COUNT} />
    </div>
  );
};
