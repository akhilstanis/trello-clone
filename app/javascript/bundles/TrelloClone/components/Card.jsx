import PropTypes from 'prop-types';
import React from 'react';
import { RIEInput } from 'riek';
import { DragSource, DropTarget } from 'react-dnd';

import { DraggableItemTypes } from '../constants';

class Card extends React.Component {
  static propTypes = {
    id:    PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  onUpdateCard(updatedAttrs) {
    this.props.updateCard(this.props.id, updatedAttrs);
  }

  render() {
    const { connectDragSource, isDragging, connectDropTarget, isOver } = this.props;

    return connectDropTarget(connectDragSource(
      <div className="card" style={{ opacity: isDragging ? 0.5 : 1 }}>
        <RIEInput value={this.props.title} propName="title" change={this.onUpdateCard.bind(this)} />
      </div>
    ));
  }
}

const cardSource = {
  beginDrag(props) {
    return({
      cardId: props.id,
      oldDeckId: props.deckId
    });
  }
};

const collectSource = (connect, monitor) => {
  return({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  });
};

const dragSourcedCard = DragSource(DraggableItemTypes.CARD, cardSource, collectSource)(Card);

const cardTarget = {
  drop(props, monitor) {
    const { cardId, oldDeckId } = monitor.getItem();
    props.moveCard(cardId, oldDeckId, props.deckId, props.id);
  }
};

const collectTarget = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

export default DropTarget(DraggableItemTypes.CARD, cardTarget, collectTarget)(dragSourcedCard);
