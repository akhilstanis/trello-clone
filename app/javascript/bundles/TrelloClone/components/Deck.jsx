import PropTypes from 'prop-types';
import React from 'react';
import { RIEInput } from 'riek';
import { DropTarget, DragSource } from 'react-dnd';

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
    const { connectDropTarget, connectDeckDragSource, connectDeckDropTarget } = this.props;

    return connectDeckDropTarget(connectDeckDragSource(connectDropTarget(
      <div className="col-md-3">
        <div className="deck">
          <h2 className="deck-name">
            <RIEInput value={this.props.name} propName="name" change={this.onUpdateDeck.bind(this)} />
          </h2>
          <CardsContainer deckId={this.props.id} />
        </div>
      </div>
    )));
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

const cardDropTargetedDeck = DropTarget(DraggableItemTypes.CARD, deckTarget, collect)(Deck);

const deckSource = {
  beginDrag(props) {
    return({
      deckId: props.id,
      boardId: props.boardId
    });
  }
};

const deckSourceCollect = (connect, monitor) => {
  return({
    connectDeckDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  });
};

const deckDragSourcedDeck = DragSource(DraggableItemTypes.DECK, deckSource, deckSourceCollect)(cardDropTargetedDeck);

const deckDropTarget = {
  drop(props, monitor) {
    const { deckId, boardId } = monitor.getItem();
    props.moveDeck(deckId, boardId, props.id);
  }
};

const deckTargetCollect = (connect, monitor) => {
  return {
    connectDeckDropTarget: connect.dropTarget(),
    isDeckOver: monitor.isOver()
  };
};

export default DropTarget(DraggableItemTypes.DECK, deckDropTarget, deckTargetCollect)(deckDragSourcedDeck);
