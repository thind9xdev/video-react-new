import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

export default function LoadingSpinner({ player, className }) {
  if (player.error) {
    return null;
  }
  return (
    <div className={classNames('video-react-new-loading-spinner', className)} />
  );
}

LoadingSpinner.propTypes = propTypes;
LoadingSpinner.displayName = 'LoadingSpinner';
