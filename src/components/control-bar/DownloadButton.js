import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

export default class DownloadButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { player } = this.props;
    if (player.currentSrc) {
      const link = document.createElement('a');
      link.href = player.currentSrc;
      link.download = 'video';
      link.click();
    }
  }

  render() {
    const { className } = this.props;

    return (
      <button
        className={classNames(
          className,
          'video-react-new-icon-download',
          'video-react-new-download-control video-react-new-control video-react-new-button video-react-new-icon'
        )}
        ref={c => {
          this.button = c;
        }}
        type="button"
        tabIndex="0"
        onClick={this.handleClick}
      >
        <span className="video-react-new-control-text">Download</span>
      </button>
    );
  }
}

DownloadButton.propTypes = propTypes;
DownloadButton.displayName = 'DownloadButton';
