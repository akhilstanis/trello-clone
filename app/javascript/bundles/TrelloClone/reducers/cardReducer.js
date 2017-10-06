import { OrderedMap } from 'immutable';

export default (state = OrderedMap({}), action) => {
  switch(action.type) {
    case 'CREATE_CARD':
      return state.set(action.card.id, action.card);

    default:
      return state;

  }
};
