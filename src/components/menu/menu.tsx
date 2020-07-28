import React from 'react';
import DiscreteSlider from "./slider";
import MenuSwitch from "./switch";
import classes from "./menu.module.css";

export const Menu: React.FC = () => {
  return (
    <div className={classes.Menu}>
      <MenuSwitch />
      <DiscreteSlider type={'max-quantity'} />
      <DiscreteSlider type={'total-quantity'} />
      <p className={classes.about}>
        Выигрывает тот, у кого в конце игры – после того, как все спички будут разобраны, – окажется четное число спичек!
      </p>
    </div>
  );
};
