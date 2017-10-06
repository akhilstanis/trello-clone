import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import * as cardActions from '../actions/cardActions';

class Deck extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  onAddCard() {
    this.props.createCard({
      id: (new Date()).getTime().toString(),
      title: "New Card",
      deckId: this.props.id
    });
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
        <a className="add-card-link" onClick={this.onAddCard.bind(this)}>Add Card</a>
      </div>
    );
  }
}

const mapPropsToState = (state, ownProps) => {
  return({
    ...ownProps,
    cards: state.cardsById.filter((card,_) => card.deckId === ownProps.id).valueSeq().toArray()
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createCard: (card) => dispatch(cardActions.createCard(card))
  });
};

export default connect(mapPropsToState, mapDispatchToProps)(Deck);
