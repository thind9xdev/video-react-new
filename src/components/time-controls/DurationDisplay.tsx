/**

 * Copyright (c) 2016 Video-React contributors
 * Copyright (c) 2025 ZingMe.Vn
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import classNames from 'classnames';

import { formatTime } from '../../utils';

export interface DurationDisplayProps {
  player: {
    duration: number;
  };
  className?: string;
}

function DurationDisplay({ player, className }: DurationDisplayProps) {
  const formattedTime = formatTime(player.duration);
  return (
    <div
      className={classNames(
        className,
        'video-react-new-duration video-react-new-time-control video-react-new-control'
      )}
    >
      <div className="video-react-new-duration-display" aria-live="off">
        <span className="video-react-new-control-text">Duration Time </span>
        {formattedTime}
      </div>
    </div>
  );
}

DurationDisplay.displayName = 'DurationDisplay';

export default DurationDisplay;
