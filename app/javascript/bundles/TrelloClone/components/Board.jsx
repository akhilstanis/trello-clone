import PropTypes from 'prop-types';
import React from 'react';
import { List } from 'immutable';

import Deck from './Deck';

export default class Board extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    decks: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  onAddCard() {
    this.props.createDeck({
      id: (new Date()).getTime().toString(),
      name: 'New Deck',
      cards: List([]),
      boardId: this.props.id
    });
  }

  renderDecks() {
    let decks = this.props.decks.map((deck,i) => {
      return(
        <div className="col-md-3">
          <Deck key={i} id={deck.id} name={deck.name}></Deck>
        </div>
      );
    });

    return(
      <div className="decks row">
        {decks}
        <div className="col-md-3">
          <a className="add-deck-link" onClick={this.onAddCard.bind(this)}>Add Deck</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="board row">
        <div className="col-md-12">
          <h1>{this.props.name}</h1>
        </div>
        <div className="col-md-12">
          {this.renderDecks()}
        </div>
      </div>
    );
  }
}
