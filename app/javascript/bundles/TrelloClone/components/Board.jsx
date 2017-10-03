import PropTypes from 'prop-types';
import React from 'react';

import Deck from './Deck';

export default class Board extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    decks: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  renderDecks() {
    let decks = this.props.decks.map((deck,i) => {
      return(<Deck key={i} name={deck.name} cards={deck.cards}></Deck>);
    });

    return(<div className="decks col-md-3">{decks}</div>);
  }

  render() {
    return (
      <div className="board row">
        <div class="col-md-12">
          <h1>{this.props.name}</h1>
        </div>
        {this.renderDecks()}
        <a className="add-deck-link col-md-3">Add Deck</a>
      </div>
    );
  }
}
