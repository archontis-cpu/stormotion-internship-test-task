import React, { useState } from 'react';
import { Menu } from "./components/menu/menu";
import { Game } from "./components/game/game";
import { ButtonAppBar } from "./components/app-bar/app-bar";
const App: React.FC = () => {

  const [display, setDisplay] = useState(false);

  const handleMenuClick = (): void => {
    setDisplay((prevState: boolean) => !prevState);
  };

  return (
    <div className="App">
      <ButtonAppBar handleMenu={handleMenuClick} />
      { display ? <Menu /> : <Game /> }
    </div>
  );
};

export default App;
