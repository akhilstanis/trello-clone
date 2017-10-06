import { combineReducers } from 'redux';

import boardReducer from './boardReducer';
import deckReducer from './deckReducer';
import cardReducer from './cardReducer';

export default combineReducers({
  boardsById: boardReducer,
  decksById:  deckReducer,
  cardsById:  cardReducer
});
