import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from "prop-types";

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

type AppBarHandlers = {
  handleMenu(): void
}

export const ButtonAppBar: React.FC<AppBarHandlers> = ({handleMenu}): JSX.Element => {

  const classes = useStyles();

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
          >
            &#9776;
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Matchstick game
          </Typography>
          <IconButton
            color="inherit"
            style={{margin: 0}}
          >
            &#8635;
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ButtonAppBar.propTypes = {
  handleMenu: PropTypes.func.isRequired
};
