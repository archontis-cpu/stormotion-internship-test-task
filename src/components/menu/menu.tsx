import React from 'react';
import { SettingsMenuSlider } from "./slider";
import { MenuSwitch } from "./switch";
import classes from "./menu.module.css";

export const Menu: React.FC = () => {
  return (
    <div className={classes.Menu}>
      <MenuSwitch />
      <SettingsMenuSlider type={'max-quantity'} />
      <SettingsMenuSlider type={'total-quantity'} />
      <p className={classes.about} style={{textAlign: "center"}}>
        Выигрывает тот, у кого в конце игры – после того,<br/>как все спички будут разобраны, – окажется четное число спичек!
      </p>
    </div>
  );
};
