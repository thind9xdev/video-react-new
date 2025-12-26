import fullscreen from '../utils/fullscreen';

export const OPERATE = 'video-react-new/OPERATE';
export const FULLSCREEN_CHANGE = 'video-react-new/FULLSCREEN_CHANGE';
export const PLAYER_ACTIVATE = 'video-react-new/PLAYER_ACTIVATE';
export const USER_ACTIVATE = 'video-react-new/USER_ACTIVATE';

export function handleFullscreenChange(isFullscreen) {
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen
  };
}

export function activate(activity) {
  return {
    type: PLAYER_ACTIVATE,
    activity
  };
}

export function userActivate(activity) {
  return {
    type: USER_ACTIVATE,
    activity
  };
}

export function play(
  operation = {
    action: 'play',
    source: ''
  }
) {
  this.video.play();

  return {
    type: OPERATE,
    operation
  };
}

export function pause(
  operation = {
    action: 'pause',
    source: ''
  }
) {
  this.video.pause();

  return {
    type: OPERATE,
    operation
  };
}

export function togglePlay(
  operation = {
    action: 'toggle-play',
    source: ''
  }
) {
  this.video.togglePlay();

  return {
    type: OPERATE,
    operation
  };
}

// seek video by time
export function seek(
  time,
  operation = {
    action: 'seek',
    source: ''
  }
) {
  this.video.seek(time);

  return {
    type: OPERATE,
    operation
  };
}

// jump forward x seconds
export function forward(
  seconds,
  operation = {
    action: `forward-${seconds}`,
    source: ''
  }
) {
  this.video.forward(seconds);

  return {
    type: OPERATE,
    operation
  };
}

// jump back x seconds
export function replay(
  seconds,
  operation = {
    action: `replay-${seconds}`,
    source: ''
  }
) {
  this.video.replay(seconds);

  return {
    type: OPERATE,
    operation
  };
}

export function changeRate(
  rate,
  operation = {
    action: 'change-rate',
    source: ''
  }
) {
  this.video.playbackRate = rate;

  return {
    type: OPERATE,
    operation
  };
}

export function changeVolume(
  volume,
  operation = {
    action: 'change-volume',
    source: ''
  }
) {
  let v = volume;
  if (volume < 0) {
    v = 0;
  }
  if (volume > 1) {
    v = 1;
  }
  this.video.volume = v;

  return {
    type: OPERATE,
    operation
  };
}

export function mute(
  muted,
  operation = {
    action: muted ? 'muted' : 'unmuted',
    source: ''
  }
) {
  this.video.muted = muted;

  return {
    type: OPERATE,
    operation
  };
}

export function toggleFullscreen(player) {
  if (fullscreen.enabled) {
    if (fullscreen.isFullscreen) {
      fullscreen.exit();
    } else {
      fullscreen.request(this.rootElement);
    }
    return {
      type: OPERATE,
      operation: {
        action: 'toggle-fullscreen',
        source: ''
      }
    };
  }

  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: !player.isFullscreen
  };
}

export function togglePictureInPicture(
  operation = {
    action: 'toggle-picture-in-picture',
    source: ''
  }
) {
  if (document.pictureInPictureEnabled && this.video) {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      this.video.requestPictureInPicture();
    }
  }

  return {
    type: OPERATE,
    operation
  };
}

export function toggleLoop(
  loop,
  operation = {
    action: 'toggle-loop',
    source: ''
  }
) {
  this.video.loop = loop;

  return {
    type: OPERATE,
    operation
  };
}

export function toggleTheaterMode(
  isTheater,
  operation = {
    action: 'toggle-theater',
    source: ''
  }
) {
  return {
    type: OPERATE,
    operation: {
      ...operation,
      isTheater
    }
  };
}

export function changeQuality(
  quality,
  operation = {
    action: 'change-quality',
    source: ''
  }
) {
  return {
    type: OPERATE,
    operation: {
      ...operation,
      quality
    }
  };
}

export function takeScreenshot(
  operation = {
    action: 'take-screenshot',
    source: ''
  }
) {
  if (this.video) {
    const canvas = document.createElement('canvas');
    canvas.width = this.video.videoWidth;
    canvas.height = this.video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `screenshot-${Date.now()}.png`;
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  return {
    type: OPERATE,
    operation
  };
}
