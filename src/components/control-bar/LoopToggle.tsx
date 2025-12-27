/**

 * Copyright (c) 2016 Video-React contributors
 * Copyright (c) 2025 ZingMe.Vn
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import classNames from 'classnames';
import React, { forwardRef, useCallback } from 'react';

import type { PlayerButtonProps } from '../../types/component';

const LoopToggle = forwardRef<HTMLButtonElement, PlayerButtonProps>(
  ({ actions, player, className }, ref) => {
    const isLoop = !!player.loop;

    const handleClick = useCallback(() => {
      actions.handleLoopChange(!isLoop);
    }, [actions, isLoop]);

    return (
      <button
        className={classNames(
          className,
          {
            'video-react-new-icon-loop-active': isLoop,
            'video-react-new-icon-loop': !isLoop,
          },
          'video-react-new-loop-control video-react-new-control video-react-new-button video-react-new-icon'
        )}
        ref={ref}
        type="button"
        tabIndex={0}
        onClick={handleClick}
      >
        <span className="video-react-new-control-text">
          {isLoop ? 'Loop On' : 'Loop Off'}
        </span>
      </button>
    );
  }
);

LoopToggle.displayName = 'LoopToggle';

export default LoopToggle;
