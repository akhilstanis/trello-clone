import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  static propTypes = {
    boards: PropTypes.array.isRequired,
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
      <div>
        <h1 className="app-title">Trello Clone App</h1>
        <div className="row boards-container">
          {this.renderBoards()}
          <div className="col-md-3">
            <a href="#" onClick={this.onCreateBoard.bind(this)}><div className="board">Add Board</div></a>
          </div>
        </div>
      </div>
    );
  }
}
