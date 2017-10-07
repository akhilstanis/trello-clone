import PropTypes from 'prop-types';
import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import DecksContainer from '../containers/DecksContainer';

class Board extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="board row">
        <div className="col-md-12">
          <h1>{this.props.name}</h1>
        </div>
        <div className="col-md-12">
          <DecksContainer boardId={this.props.id} />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
