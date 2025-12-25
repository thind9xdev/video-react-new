import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { formatTime } from '../../utils';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

function RemainingTimeDisplay({
  player: { currentTime, duration },
  className
}) {
  const remainingTime = duration - currentTime;
  const formattedTime = formatTime(remainingTime);
  return (
    <div
      className={classNames(
        'video-react-new-remaining-time video-react-new-time-control video-react-new-control',
        className
      )}
    >
      <div className="video-react-new-remaining-time-display" aria-live="off">
        <span className="video-react-new-control-text">Remaining Time </span>
        {`-${formattedTime}`}
      </div>
    </div>
  );
}

RemainingTimeDisplay.propTypes = propTypes;
RemainingTimeDisplay.displayName = 'RemainingTimeDisplay';

export default RemainingTimeDisplay;
