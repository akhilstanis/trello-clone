import { OrderedMap, fromJS } from 'immutable';

export default (state = OrderedMap({}), action) => {
  switch(action.type) {
    case 'CREATE_CARD':
      return state.set(action.card.id, fromJS(action.card));

    case 'UPDATE_CARD':
      return state.mergeIn([action.id], fromJS(action.cardAttrs));

    case 'MOVE_CARD':
      return state.setIn([action.id, 'deckId'], action.newDeckId);

    default:
      return state;

  }
};
