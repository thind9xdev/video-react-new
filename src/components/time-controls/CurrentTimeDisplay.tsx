/**

 * Copyright (c) 2016 Video-React contributors
 * Copyright (c) 2025 ZingMe.Vn
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { formatTime } from '../../utils';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string,
};

interface CurrentTimeDisplayProps {
  player: {
    currentTime: number;
    duration: number;
  };
  className?: string;
}

function CurrentTimeDisplay({ player, className }: CurrentTimeDisplayProps) {
  const formattedTime = formatTime(player.currentTime, player.duration);
  return (
    <div
      className={classNames(
        'video-react-new-current-time video-react-new-time-control video-react-new-control',
        className
      )}
    >
      <div className="video-react-new-current-time-display" aria-live="off">
        <span className="video-react-new-control-text">Current Time </span>
        {formattedTime}
      </div>
    </div>
  );
}

CurrentTimeDisplay.propTypes = propTypes;
CurrentTimeDisplay.displayName = 'CurrentTimeDisplay';

export default CurrentTimeDisplay;
