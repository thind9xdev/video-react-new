import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import VolumeBar from './VolumeBar';

const propTypes = {
  className: PropTypes.string
};

export default function VolumeControl({ className, ...rest }) {
  return (
    <div
      className={classNames(
        className,
        'video-react-new-volume-control video-react-new-control'
      )}
    >
      <VolumeBar {...rest} />
    </div>
  );
}

VolumeControl.propTypes = propTypes;
VolumeControl.displayName = 'VolumeControl';
