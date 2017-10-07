import { OrderedMap, Map, List } from 'immutable';

const defaultBoardsState = OrderedMap({
  '0': Map({
    id: '0',
    name: 'Default Board',
    decks: List([]),
    decksOrder: List([])
  })
});

export default (state = defaultBoardsState, action) => {
  switch(action.type) {
    case 'CREATE_DECK':
      return state.
        updateIn([action.deck.boardId, 'decks'], decks => decks.concat(action.deck.id)).
        updateIn([action.deck.boardId, 'decksOrder'], decksOrder => decksOrder.concat(action.deck.id))

    default:
      return state;

  }
};
