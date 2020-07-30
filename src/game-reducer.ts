interface SettingsGameAction {
  type: string,
  payload: number,
}

interface GameSettings {
  AI_TURNS_FIRST: boolean | number
  MAX_MATCHES_PER_TURN: number
  INITIAL_MATCHES_COUNT: number
}

export interface GameState {
  SETTINGS: GameSettings
  AI_SCORE: number
  PERSON_SCORE: number
  MATCHES_LEFT: number
  RESULT: number
}

export const defaultGameState: GameState = {
  SETTINGS: {
    AI_TURNS_FIRST: false,
    MAX_MATCHES_PER_TURN: 3,
    INITIAL_MATCHES_COUNT: 25,
  },
  AI_SCORE: 0,
  PERSON_SCORE: 0,
  MATCHES_LEFT: 25,
  RESULT: 0,
};

export const gameReducer = (
  state: GameState = defaultGameState,
  action: SettingsGameAction
): GameState => {

  switch (action.type) {
  case "AI_TURNED":
    return {
      ...state,
      AI_SCORE: state.AI_SCORE + action.payload,
      MATCHES_LEFT: state.MATCHES_LEFT - action.payload,
    };
  case "HUMAN_TURNED":
    return {
      ...state,
      PERSON_SCORE: state.PERSON_SCORE + action.payload,
      MATCHES_LEFT: state.MATCHES_LEFT - action.payload,
    };
  case "CHANGE_WHO_TURNS_FIRST":
    return {
      ...state,
      SETTINGS: {
        ...state.SETTINGS,
        "AI_TURNS_FIRST": action.payload,
      }
    };
  case "CHANGE_MAX_MATCHES_PER_TURN":
    return {
      ...state,
      SETTINGS: {
        ...state.SETTINGS,
        "MAX_MATCHES_PER_TURN": action.payload
      }
    };
  case "CHANGE_INITIAL_MATCHES_COUNT":
    return {
      ...state,
      SETTINGS: {
        ...state.SETTINGS,
        "INITIAL_MATCHES_COUNT": action.payload
      },
      "MATCHES_LEFT": action.payload
    };
  case "GAME_OVER":
    return {
      ...state,
      "RESULT": action.payload,
    };
  case "RESTART":
    return {
      ...state,
      AI_SCORE: 0,
      PERSON_SCORE: 0,
      MATCHES_LEFT: state.SETTINGS.INITIAL_MATCHES_COUNT,
      RESULT: 0,
    };
  case "DEFAULT":
    return {...state};
  default:
    return state;
  }

};