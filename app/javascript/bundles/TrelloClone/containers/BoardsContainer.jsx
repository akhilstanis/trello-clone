import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as boardActions from '../actions/boardActions';

class BoardsContainer extends React.Component {
  static propTypes = {
    boards: PropTypes.array.isRequired,
    createBoard: PropTypes.func.isRequired
  };

  onCreateBoard(){
    this.props.createBoard({
      id: (new Date()).getTime().toString(),
      name: 'New Board',
      decks: [],
      decksOrder: []
    });
  }

  renderBoards() {
    return this.props.boards.map((board,i) => {
      return(
        <div key={i} className="col-md-3">
          <Link to={`/boards/${board.id}`}>
            <div className="board">{board.name}</div>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row boards-container">
        <div className="col-md-12">
          <h1>Boards</h1>
        </div>
        {this.renderBoards()}
        <div className="col-md-3">
          <a href="#" onClick={this.onCreateBoard.bind(this)}><div className="board">Add Board</div></a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    boards: state.boardsById.valueSeq().toJS()
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createBoard: (board) => dispatch(boardActions.createBoard(board))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardsContainer);
