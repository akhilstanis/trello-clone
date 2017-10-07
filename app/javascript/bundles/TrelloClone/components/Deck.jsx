import PropTypes from 'prop-types';
import React from 'react';
import { RIEInput } from 'riek';
import { DropTarget } from 'react-dnd';

import CardsContainer from '../containers/CardsContainer';
import { DraggableItemTypes } from '../constants';

class Deck extends React.Component {
  static propTypes = {
    id:   PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  onUpdateDeck(deckAttrs) {
    this.props.updateDeck(this.props.id, deckAttrs);
  }

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="col-md-3">
        <div className="deck">
          <h2 className="deck-name">
            <RIEInput value={this.props.name} propName="name" change={this.onUpdateDeck.bind(this)} />
          </h2>
          <CardsContainer deckId={this.props.id} />
        </div>
      </div>
    );
  }
}

const deckTarget = {
  drop(props, monitor) {
    if(monitor.didDrop())
      return;

    const { cardId, oldDeckId } = monitor.getItem();
    props.moveCard(cardId, oldDeckId, props.id, null);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

export default DropTarget(DraggableItemTypes.CARD, deckTarget, collect)(Deck);
