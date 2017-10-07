import PropTypes from 'prop-types';
import React from 'react';
import { RIEInput } from 'riek';

export default class Card extends React.Component {
  static propTypes = {
    id:    PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  onUpdateCard(updatedAttrs) {
    this.props.updateCard(this.props.id, updatedAttrs);
  }

  render() {
    return (
      <div className="card">
        <RIEInput value={this.props.title} propName="title" change={this.onUpdateCard.bind(this)} />
      </div>
    );
  }
}
