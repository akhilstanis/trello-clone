import { connect } from 'react-redux';

import Board from '../components/Board';
import * as deckActions from '../actions/deckActions';

const mapStateToProps = (state) => {
  const defaultBoardId = '0';

  return({
    ...state.boardsById.get(defaultBoardId),
    decks: state.decksById.filter((deck,_) => deck.boardId === defaultBoardId).valueSeq().toArray()
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createDeck: (deck) => dispatch(deckActions.createDeck(deck))
  });
};

const TrelloCloneApp = connect(mapStateToProps, mapDispatchToProps)(Board);

export default TrelloCloneApp;
