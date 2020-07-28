import React from "react";
import {Matchstick} from "../matchstick/matchstick";
import PropTypes from "prop-types";
import classes from "./field.module.css";

type FieldProps = {
  total_quantity: number
}

export const Field: React.FC<FieldProps> = ({total_quantity = 25}) => {
  const matches = [];
  for (let i = 0; i < total_quantity; i++) {
    matches.push(<Matchstick key={i} />);
  }
  return (
    <div className={classes.Field}>
      { matches }
    </div>
  );
};

Field.propTypes = {
  total_quantity: PropTypes.number.isRequired
};