import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Deck from '../components/deck';
import * as deckActions from '../actions/deckActions';
import * as cardActions from '../actions/cardActions';

class DecksContainer extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    decksById: PropTypes.object.isRequired
  }

  onAddDeck() {
    this.props.createDeck({
      id: (new Date()).getTime().toString(),
      name: 'New Deck',
      cards: [],
      cardsOrder: [],
      boardId: this.props.boardId
    });
  }

  render() {
    let decks = this.props.decksOrder.map((deckId,i) => {
      return(<Deck key={i} updateDeck={this.props.updateDeck} moveCard={this.props.moveCard} {...this.props.decksById[deckId]} />);
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
    decksById: state.decksById.filter((deck,_) => deck.get('boardId') === ownProps.boardId).toJS(),
    decksOrder: state.boardsById.get(ownProps.boardId).get('decksOrder').toArray()
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createDeck: (deck) => dispatch(deckActions.createDeck(deck)),
    updateDeck: (id,deckAttrs) => dispatch(deckActions.updateDeck(id, deckAttrs)),
    moveCard:   (id,oldDeckId,newDeckId,beforeCardId) => dispatch(cardActions.moveCard(id,oldDeckId,newDeckId, beforeCardId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksContainer);

