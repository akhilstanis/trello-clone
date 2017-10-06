import { OrderedMap } from 'immutable';

const defaultBoardsState = OrderedMap({
  '0': {
    id: '0',
    name: 'Default Board',
    decks: []
  }
});

export default (state = defaultBoardsState, action) => {
  switch(action.type) {
    default:
      return state;

  }
};
