import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  actions: PropTypes.object,
  className: PropTypes.string,
  seconds: PropTypes.oneOf([5, 10, 30])
};

const defaultProps = {
  seconds: 10
};

export default (mode) => {
  class ForwardReplayControl extends Component {
    constructor(props, context) {
      super(props, context);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const { actions, seconds } = this.props;
      // Depends mode to implement different actions
      if (mode === 'forward') {
        actions.forward(seconds);
      } else {
        actions.replay(seconds);
      }
    }

    render() {
      const { seconds, className } = this.props;
      const classNames = [
        'video-react-new-control',
        'video-react-new-button',
        'video-react-new-icon'
      ];
      classNames.push(
        `video-react-new-icon-${mode}-${seconds}`,
        `video-react-new-${mode}-control`
      );
      if (className) {
        classNames.push(className);
      }
      return (
        <button
          ref={(c) => {
            this.button = c;
          }}
          className={classNames.join(' ')}
          type="button"
          onClick={this.handleClick}
        >
          <span className="video-react-new-control-text">{`${mode} ${seconds} seconds`}</span>
        </button>
      );
    }
  }

  ForwardReplayControl.propTypes = propTypes;
  ForwardReplayControl.defaultProps = defaultProps;
  return ForwardReplayControl;
};
