import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string
};

export default class PictureInPictureToggle extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions } = this.props;
    actions.togglePictureInPicture();
  }

  render() {
    const { player, className } = this.props;
    const isPip = player.isPictureInPicture || false;

    return (
      <button
        className={classNames(
          className,
          {
            'video-react-new-icon-picture-in-picture-exit': isPip,
            'video-react-new-icon-picture-in-picture': !isPip
          },
          'video-react-new-picture-in-picture-control video-react-new-control video-react-new-button video-react-new-icon'
        )}
        ref={(c) => {
          this.button = c;
        }}
        type="button"
        tabIndex="0"
        onClick={this.handleClick}
      >
        <span className="video-react-new-control-text">
          Picture-in-Picture
        </span>
      </button>
    );
  }
}

PictureInPictureToggle.propTypes = propTypes;
PictureInPictureToggle.displayName = 'PictureInPictureToggle';
