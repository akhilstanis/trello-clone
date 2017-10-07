import { OrderedMap, Map, fromJS } from 'immutable';

export default (state = OrderedMap({}), action) => {
  switch(action.type) {
    case 'CREATE_DECK':
      return state.set(action.deck.id, fromJS(action.deck));

    case 'UPDATE_DECK':
      return state.mergeIn([action.id], fromJS(action.deckAttrs));

    case 'CREATE_CARD':
      return state.
        updateIn([action.card.deckId, 'cards'], cards => cards.concat(action.card.id)).
        updateIn([action.card.deckId, 'cardsOrder'], cards => cards.concat(action.card.id))

    case 'MOVE_CARD':
      // TODO: cardsOrder
      return state.
        updateIn([action.oldDeckId, 'cards'], cards => cards.filter(cardId => cardId != action.id)).
        updateIn([action.newDeckId, 'cards'], cards => cards.concat(action.id))

    default:
      return state;

  }
};
