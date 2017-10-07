import PropTypes from 'prop-types';
import React from 'react';

import CardsContainer from '../containers/CardsContainer';

export default class Deck extends React.Component {
  static propTypes = {
    id:   PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="col-md-3">
        <div className="deck">
          <h2 className="deck-name">{this.props.name}</h2>
          <CardsContainer deckId={this.props.id} />
        </div>
      </div>
    );
  }
}

