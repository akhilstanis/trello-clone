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

    case 'MOVE_DECK':
      let insertAt = action.beforeDeckId ? state.getIn([action.boardId, 'decksOrder']).indexOf(action.beforeDeckId) : 0;
      return state.
        updateIn([action.boardId, 'decksOrder'], decksOrder => decksOrder.filter(deckId => deckId != action.id)).
        updateIn([action.boardId, 'decksOrder'], decksOrder => decksOrder.insert(insertAt,action.id))

    default:
      return state;

  }
};
