import { connect } from 'react-redux';

import Board from '../components/Board';
import * as deckActions from '../actions/deckActions';

const mapStateToProps = (state) => {
  const defaultBoardId = '0';

  return({
    ...state.boardsById.get(defaultBoardId).toJS(),
  });
};

const TrelloCloneApp = connect(mapStateToProps, null)(Board);

export default TrelloCloneApp;
