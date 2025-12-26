import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string
};

export default class ScreenshotButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions } = this.props;
    actions.takeScreenshot();
  }

  render() {
    const { className } = this.props;

    return (
      <button
        className={classNames(
          className,
          'video-react-new-icon-camera',
          'video-react-new-screenshot-control video-react-new-control video-react-new-button video-react-new-icon'
        )}
        ref={c => {
          this.button = c;
        }}
        type="button"
        tabIndex="0"
        onClick={this.handleClick}
      >
        <span className="video-react-new-control-text">Screenshot</span>
      </button>
    );
  }
}

ScreenshotButton.propTypes = propTypes;
ScreenshotButton.displayName = 'ScreenshotButton';
