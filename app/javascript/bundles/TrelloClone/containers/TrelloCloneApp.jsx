import { connect } from 'react-redux';
import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import BoardsContainer from './BoardsContainer';
import Board from '../components/Board';
import * as deckActions from '../actions/deckActions';
import * as boardActions from '../actions/boardActions';

class TrelloCloneApp extends React.Component {

  render(){
    return(
      <div>
        <div className="header">Trello Clone App</div>
        <Switch>
          <Route exact path="/" component={BoardsContainer} />
          <Route path="/boards/:id" render={ (props) => {
            return <Board updateBoard={this.props.updateBoard} {...this.props.boardsById[props.match.params.id]}/>
          }}/>
        </Switch>
      </div>
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
    updateBoard: (id,boardAttrs) => dispatch(boardActions.updateBoard(id,boardAttrs))
  });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrelloCloneApp));
