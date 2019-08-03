import {combineReducers} from 'redux';

// Import other Reducers
import GameSettingReducer from './GameSettingsReducer';
import DeckOfCardsReducer from './DeckOfCardsReducer';
import GameStateReducer from './GameStateReducer';



const RootReducer = combineReducers({GameSettingReducer : GameSettingReducer, DeckOfCardsReducer : DeckOfCardsReducer, GameStateReducer : GameStateReducer});

export default RootReducer;