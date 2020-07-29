interface GameState {
  'human-turns-first': boolean,
  'matches-per-turn': number,
  'initial-matches': number,
}

interface SettingsGameAction {
  type: string,
  payload: boolean | number,
}

const defaultGameState: GameState = {
  'human-turns-first': true,
  'matches-per-turn': 3,
  'initial-matches': 25,
};

export const gameReducer = (
  state: GameState = defaultGameState,
  action: SettingsGameAction): GameState => {

  switch (action.type) {
  default:
    return state;
  }

};