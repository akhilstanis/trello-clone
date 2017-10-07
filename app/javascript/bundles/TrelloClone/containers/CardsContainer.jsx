import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/card';
import * as cardActions from '../actions/cardActions';

class CardsContainer extends React.Component {
  static propTypes = {
    deckId: PropTypes.string.isRequired,
    cardsById:  PropTypes.object.isRequired
  }

  onAddCard() {
    this.props.createCard({
      id: (new Date()).getTime().toString(),
      title: 'New Card',
      deckId: this.props.deckId
    });
  }

  render() {
    let cards = this.props.cardsOrder.map((cardId,i) => {
      return(<Card updateCard={this.props.updateCard} moveCard={this.props.moveCard} key={i} {...this.props.cardsById[cardId]} />);
    });

    return (
      <div className="cards">
        {cards}
        <a className="add-card-link" onClick={this.onAddCard.bind(this)}>Add Card</a>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    cardsById: state.cardsById.filter((card,_) => card.get('deckId') === ownProps.deckId).toJS(),
    cardsOrder: state.decksById.get(ownProps.deckId).get('cardsOrder').toArray()
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createCard: (card) => dispatch(cardActions.createCard(card)),
    updateCard: (id,cardAttrs) => dispatch(cardActions.updateCard(id, cardAttrs)),
    moveCard:   (id,oldDeckId,newDeckId,beforeCardId) => dispatch(cardActions.moveCard(id,oldDeckId,newDeckId, beforeCardId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);

