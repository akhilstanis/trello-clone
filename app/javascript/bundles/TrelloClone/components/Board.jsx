import PropTypes from 'prop-types';
import React from 'react';

import DecksContainer from '../containers/DecksContainer';

export default class Board extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    decks: PropTypes.array.isRequired
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
