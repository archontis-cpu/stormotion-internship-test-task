import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import classes from './switch.module.css';
import {Context} from "../../App";

export const MenuSwitch: React.FC = () => {

  // const [state, setState] = React.useState({
  //   HUMAN_TURNS_FIRST: false,
  // });

  // @ts-ignore
  const {state, dispatch} = useContext(Context);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    dispatch({type: "CHANGE_WHO_TURNS_FIRST", payload: event.target.checked});
    console.log(event.target.checked);
  };

  return (
    <div className={classes.Switch}>
      <Typography>
        AI turns first
      </Typography>
      <Switch
        checked={state.SETTINGS.AI_TURNS_FIRST}
        onChange={handleChange}
        color="primary"
        name="HUMAN_TURNS_FIRST"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
};