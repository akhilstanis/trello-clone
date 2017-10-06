import PropTypes from 'prop-types';
import React from 'react';
import { RIEInput } from 'riek';

export default class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

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
