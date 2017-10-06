import { OrderedMap, Map, fromJS } from 'immutable';

export default (state = OrderedMap({}), action) => {
  switch(action.type) {
    case 'CREATE_DECK':
      return state.set(action.deck.id, fromJS(action.deck));

    default:
      return state;

  }
};
