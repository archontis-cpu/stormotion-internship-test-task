import React, {useContext} from "react";
import {Matchstick} from "../matchstick/matchstick";
import PropTypes from "prop-types";
import classes from "./field.module.css";
import {Context} from "../../App";

type FieldProps = {
  total_quantity: number
}

export const Field: React.FC<FieldProps> = ({total_quantity = 25}) => {
  const matches = [];

  // @ts-ignore
  const {state, dispatch} = useContext(Context);

  for (let i = 0; i < state.MATCHES_LEFT; i++) {
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