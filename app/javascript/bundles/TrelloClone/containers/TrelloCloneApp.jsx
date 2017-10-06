import { connect } from 'react-redux';

import Board from '../components/Board';
import * as deckActions from '../actions/deckActions';

const mapStateToProps = (state) => {
  const defaultBoardId = '0';

  return({
    ...state.boardsById.get(defaultBoardId).toJS(),
    decks: state.decksById.filter((deck,_) => deck.get('boardId') === defaultBoardId).valueSeq().toJS()
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createDeck: (deck) => dispatch(deckActions.createDeck(deck))
  });
};

const TrelloCloneApp = connect(mapStateToProps, mapDispatchToProps)(Board);

export default TrelloCloneApp;
