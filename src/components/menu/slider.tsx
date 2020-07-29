import React, {useReducer} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';

interface SliderType {
  type: string
}

export const SettingsMenuSlider: React.FC<SliderType> = ({ type }) => {

  const getSliderPropsByType = () => {
    if (type === 'max-quantity') {
      return {
        sliderTitle: 'Max matches quantity can be taken per turn',
        defaultValue: 3,
        step: 1,
        min: 2,
        max: 10,
      };
    }

    return {
      sliderTitle: 'Initial matches quantity',
      defaultValue: 25,
      step: 2,
      min: 3,
      max: 99,
    };
  };

  const {
    sliderTitle,
    defaultValue,
    step,
    min,
    max
  } = getSliderPropsByType();



  return (
    <div style={{
      width: '100%',
      maxWidth: 650,
      padding: "0 2.5vw 0 2.5vw",
      boxSizing: "border-box",
    }}>
      <Typography gutterBottom>
        {sliderTitle}
      </Typography>
      <Slider
        defaultValue={defaultValue}
        step={step}
        min={min}
        max={max}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

SettingsMenuSlider.propTypes = {
  type: PropTypes.string.isRequired,
};
