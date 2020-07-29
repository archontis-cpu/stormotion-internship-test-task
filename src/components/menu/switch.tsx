import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import classes from './switch.module.css';

export const MenuSwitch: React.FC = () => {

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.Switch}>
      <Typography>
        AI turns first
      </Typography>
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
};