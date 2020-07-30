import React, {useContext} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from "prop-types";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {Context} from "../../App";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

type AppBarProps = {
  handleMenu(): void,
  icon: string,
}

export const ButtonAppBar: React.FC<AppBarProps> = ({handleMenu, icon}): JSX.Element => {

  const classes = useStyles();
  //@ts-ignore
  const {state, dispatch} = useContext(Context);

  const restartGame = (event:any) => {
    event.preventDefault();
    dispatch({type: "RESTART"});
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            style={{
              height: 50,
              width: 50,
            }}
          >
            {icon === 'close' ? <CloseIcon/> : <MenuIcon/>}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Matchstick game
          </Typography>
          <IconButton
            color="inherit"
            onClick={event => restartGame(event)}
            style={{
              margin: 0,
              height: 50,
              width: 50,
            }}
          >
            <AutorenewIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ButtonAppBar.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};
