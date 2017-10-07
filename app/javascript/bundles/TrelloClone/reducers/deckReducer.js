import { OrderedMap, Map, fromJS } from 'immutable';

export default (state = OrderedMap({}), action) => {
  switch(action.type) {
    case 'CREATE_DECK':
      return state.set(action.deck.id, fromJS(action.deck));

    case 'CREATE_CARD':
      return state.updateIn([action.card.deckId, 'cards'], cards => cards.concat(action.card.id))

    default:
      return state;

  }
};
