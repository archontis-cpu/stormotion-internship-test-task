import React, {useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';
import {Context} from "../../App";

interface SliderType {
  type: string
}

export const SettingsMenuSlider: React.FC<SliderType> = ({ type }) => {

  //@ts-ignore
  const { state, dispatch } = useContext(Context);

  const getSliderPropsByType = () => {
    if (type === 'max-quantity') {
      return {
        sliderTitle: 'Max matches quantity can be taken per turn',
        defaultValue: 3,
        value: state.SETTINGS.MAX_MATCHES_PER_TURN,
        step: 1,
        min: 2,
        max: 10,
        onChangeSlider: (value:any) => {
          dispatch({ type: "CHANGE_MAX_MATCHES_PER_TURN", payload: value});
        }
      };
    }

    return {
      sliderTitle: 'Initial matches quantity',
      defaultValue: 25,
      value: state.SETTINGS.INITIAL_MATCHES_COUNT,
      step: 2,
      min: 3,
      max: 99,
      onChangeSlider: (value:any) => {
        dispatch({ type: "CHANGE_INITIAL_MATCHES_COUNT", payload: value});
      }
    };
  };

  const {
    sliderTitle,
    defaultValue,
    value,
    step,
    min,
    max,
    onChangeSlider
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
        value={value}
        step={step}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        onChangeCommitted={(_, value) => {
          onChangeSlider(value);
        }}
      />
    </div>
  );
};

SettingsMenuSlider.propTypes = {
  type: PropTypes.string.isRequired,
};
