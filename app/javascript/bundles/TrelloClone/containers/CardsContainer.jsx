import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import Card from '../components/card';
import * as cardActions from '../actions/cardActions';
import { DraggableItemTypes } from '../constants';

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
      return(<Card updateCard={this.props.updateCard} key={i} {...this.props.cardsById[cardId]} />);
    });

    const { connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div className="cards">
        {cards}
        <a className="add-card-link" onClick={this.onAddCard.bind(this)}>Add Card</a>
      </div>
    );
  }
}

const deckTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.moveCard(item.cardId, item.oldDeckId, props.deckId);
  }
};

const collect = (connect, monitor) => {
  return({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver
  });
};

const dropTargetedCardsConatiner = DropTarget(DraggableItemTypes.CARD, deckTarget, collect)(CardsContainer);

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
    moveCard:   (id,oldDeckId,newDeckId) => dispatch(cardActions.moveCard(id,oldDeckId,newDeckId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(dropTargetedCardsConatiner);

