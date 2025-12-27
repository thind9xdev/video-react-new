import React from 'react';
import classNames from 'classnames';

interface VolumeLevelProps {
  percentage?: string;
  vertical?: boolean;
  className?: string;
}

const VolumeLevel: React.FC<VolumeLevelProps> = ({
  percentage = '100%',
  vertical = false,
  className,
}) => {
  const style: React.CSSProperties = {};
  if (vertical) {
    style.height = percentage;
  } else {
    style.width = percentage;
  }

  return (
    <div
      className={classNames(className, 'video-react-new-volume-level')}
      style={style}
    >
      <span className="video-react-new-control-text" />
    </div>
  );
};

VolumeLevel.displayName = 'VolumeLevel';

export default VolumeLevel;
