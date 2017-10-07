import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Deck from '../components/deck';
import * as deckActions from '../actions/deckActions';

class DecksContainer extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    decks:   PropTypes.array.isRequired
  }

  onAddDeck() {
    this.props.createDeck({
      id: (new Date()).getTime().toString(),
      name: 'New Deck',
      cards: [],
      boardId: this.props.boardId
    });
  }

  render() {
    let decks = this.props.decks.map((deck,i) => {
      return(<Deck key={i} {...deck} />);
    });

    return(
      <div className="decks row">
        {decks}
        <div className="col-md-3">
          <a className="add-deck-link" onClick={this.onAddDeck.bind(this)}>Add Deck</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    decks: state.decksById.filter((deck,_) => deck.get('boardId') === ownProps.boardId).valueSeq().toJS()
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createDeck: (deck) => dispatch(deckActions.createDeck(deck))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksContainer);

