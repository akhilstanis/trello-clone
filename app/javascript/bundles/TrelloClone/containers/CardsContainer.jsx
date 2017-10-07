import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/card';
import * as cardActions from '../actions/cardActions';

class CardsContainer extends React.Component {
  static propTypes = {
    deckId: PropTypes.string.isRequired,
    cards:  PropTypes.array.isRequired
  }

  onAddCard() {
    this.props.createCard({
      id: (new Date()).getTime().toString(),
      title: 'New Card',
      deckId: this.props.deckId
    });
  }

  render() {
    let cards = this.props.cards.map((card,i) => {
      return(<Card updateCard={this.props.updateCard} key={i} {...card} />);
    });

    return(
      <div className="cards">
        {cards}
        <a className="add-card-link" onClick={this.onAddCard.bind(this)}>Add Card</a>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    cards: state.cardsById.filter((card,_) => card.get('deckId') === ownProps.deckId).valueSeq().toJS()
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createCard: (card) => dispatch(cardActions.createCard(card)),
    updateCard: (id,cardAttrs) => dispatch(cardActions.updateCard(id, cardAttrs))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);

