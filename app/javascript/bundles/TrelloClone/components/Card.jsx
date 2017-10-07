import PropTypes from 'prop-types';
import React from 'react';
import { RIEInput } from 'riek';
import { DragSource } from 'react-dnd';

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
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div className="card" style={{ opacity: isDragging ? 0.5 : 1 }}>
        <RIEInput value={this.props.title} propName="title" change={this.onUpdateCard.bind(this)} />
      </div>
    );
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

const collect = (connect, monitor) => {
  return({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  });
};

export default DragSource(DraggableItemTypes.CARD, cardSource, collect)(Card);
