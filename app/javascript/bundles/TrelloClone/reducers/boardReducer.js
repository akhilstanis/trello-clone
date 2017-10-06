import { OrderedMap, Map, List } from 'immutable';

const defaultBoardsState = OrderedMap({
  '0': Map({
    id: '0',
    name: 'Default Board',
    decks: List([])
  })
});

export default (state = defaultBoardsState, action) => {
  switch(action.type) {
    default:
      return state;

  }
};
