import PropTypes from 'prop-types';
import React from 'react';

export default class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        {this.props.title}
      </div>
    );
  }
}
