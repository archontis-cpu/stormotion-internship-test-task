import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '90vw',
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}

interface Slider{
  type: string
}

export default function DiscreteSlider({ type }: Slider) {
  let sliderTitle;
  let defaultValue;
  let step;
  let min;
  let max;

  if (type === 'max-quantity') {
    sliderTitle = 'Max matches quantity can be taken per turn';
    defaultValue = 3;
    step = 1;
    min = 2;
    max = 10;
  } else if (type === 'total-quantity') {
    sliderTitle = 'Initial matches quantity';
    defaultValue = 25;
    step = 2;
    min = 3;
    max = 99;
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom>
        {sliderTitle}
      </Typography>
      <Slider
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        step={step}
        min={min}
        max={max}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

DiscreteSlider.propTypes = {
  type: PropTypes.string
};
