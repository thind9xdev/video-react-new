import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string
};

export default class LoopToggle extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions, player } = this.props;
    actions.toggleLoop(!player.loop);
  }

  render() {
    const { player, className } = this.props;
    const isLoop = player.loop || false;

    return (
      <button
        className={classNames(
          className,
          {
            'video-react-new-icon-loop-active': isLoop,
            'video-react-new-icon-loop': !isLoop
          },
          'video-react-new-loop-control video-react-new-control video-react-new-button video-react-new-icon'
        )}
        ref={(c) => {
          this.button = c;
        }}
        type="button"
        tabIndex="0"
        onClick={this.handleClick}
      >
        <span className="video-react-new-control-text">
          {isLoop ? 'Loop On' : 'Loop Off'}
        </span>
      </button>
    );
  }
}

LoopToggle.propTypes = propTypes;
LoopToggle.displayName = 'LoopToggle';
