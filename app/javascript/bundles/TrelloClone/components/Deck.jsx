import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';

export default class Deck extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  renderCards() {
    let cards = this.props.cards.map((card,i) => {
      return(<Card key={i} title={card.title}></Card>);
    });

    return(<div className="cards">{cards}</div>);
  }

  render() {
    return (
      <div className="deck">
        <h2 className="deck-name">{this.props.name}</h2>
        {this.renderCards()}
        <a className="add-card-link">Add Card</a>
      </div>
    );
  }
}
