import React, {useReducer, useState} from 'react';
import { Menu } from "./components/menu/menu";
import { Game } from "./components/game/game";
import { ButtonAppBar } from "./components/app-bar/app-bar";
import {defaultGameState, gameReducer} from './game-reducer';
import "./App.css";
import {GameOver} from "./components/game-over/game-over";

export const Context = React.createContext({});

const App: React.FC = () => {

  const [menuDisplay, setMenuDisplay] = useState(false);
  const [state, dispatch] = useReducer(gameReducer, defaultGameState);

  const handleMenuClick = (): void => {
    setMenuDisplay((prevState: boolean) => !prevState);
  };

  return (
    <Context.Provider value={{state, dispatch}}>
      <div className="App">
        <ButtonAppBar handleMenu={handleMenuClick} icon={menuDisplay ? 'close' : 'open'}/>
        { state.MATCHES_LEFT === 0 ? <GameOver result={state.RESULT} /> : null}
        { menuDisplay ? <Menu /> : <Game /> }
      </div>
    </Context.Provider>
  );
};

export default App;
