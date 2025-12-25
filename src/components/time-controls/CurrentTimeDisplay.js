import classNames from 'classnames';
import PropTypes from 'prop-types';

import { formatTime } from '../../utils';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

function CurrentTimeDisplay({ player: { currentTime, duration }, className }) {
  const formattedTime = formatTime(currentTime, duration);
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
