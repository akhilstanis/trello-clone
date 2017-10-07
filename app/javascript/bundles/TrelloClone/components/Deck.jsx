import PropTypes from 'prop-types';
import React from 'react';
import { RIEInput } from 'riek';

import CardsContainer from '../containers/CardsContainer';

export default class Deck extends React.Component {
  static propTypes = {
    id:   PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  onUpdateDeck(deckAttrs) {
    this.props.updateDeck(this.props.id, deckAttrs);
  }

  render() {
    return (
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

