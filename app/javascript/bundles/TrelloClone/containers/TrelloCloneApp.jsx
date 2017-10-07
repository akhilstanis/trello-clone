import { connect } from 'react-redux';
import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Home from '../components/Home';
import Board from '../components/Board';
import * as deckActions from '../actions/deckActions';
import * as boardActions from '../actions/boardActions';

class TrelloCloneApp extends React.Component {

  render(){
    return(
      <Switch>
        <Route exact path="/" render={(props) => <Home createBoard={this.props.createBoard} boards={Object.values(this.props.boardsById)} />} />
        <Route path="/boards/:id" render={ (props) => {
          return <Board {...this.props.boardsById[props.match.params.id]}/>
        }}/>
      </Switch>
    );
  }

}

const mapStateToProps = (state) => {
  return({
    boardsById: state.boardsById.toJS(),
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createBoard: (board) => dispatch(boardActions.createBoard(board))
  });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrelloCloneApp));
