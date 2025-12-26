import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string
};

export default class TheaterModeToggle extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions, player } = this.props;
    actions.toggleTheaterMode(!player.isTheater);
  }

  render() {
    const { player, className } = this.props;
    const isTheater = player.isTheater || false;

    return (
      <button
        className={classNames(
          className,
          {
            'video-react-new-icon-theater-exit': isTheater,
            'video-react-new-icon-theater': !isTheater
          },
          'video-react-new-theater-control video-react-new-control video-react-new-button video-react-new-icon'
        )}
        ref={c => {
          this.button = c;
        }}
        type="button"
        tabIndex="0"
        onClick={this.handleClick}
      >
        <span className="video-react-new-control-text">
          {isTheater ? 'Exit Theater Mode' : 'Theater Mode'}
        </span>
      </button>
    );
  }
}

TheaterModeToggle.propTypes = propTypes;
TheaterModeToggle.displayName = 'TheaterModeToggle';
