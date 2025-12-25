export const LOAD_START = 'video-react-new/LOAD_START';
export const CAN_PLAY = 'video-react-new/CAN_PLAY';
export const WAITING = 'video-react-new/WAITING';
export const CAN_PLAY_THROUGH = 'video-react-new/CAN_PLAY_THROUGH';
export const PLAYING = 'video-react-new/PLAYING';
export const PLAY = 'video-react-new/PLAY';
export const PAUSE = 'video-react-new/PAUSE';
export const END = 'video-react-new/END';
export const SEEKING = 'video-react-new/SEEKING';
export const SEEKED = 'video-react-new/SEEKED';
export const SEEKING_TIME = 'video-react-new/SEEKING_TIME';
export const END_SEEKING = 'video-react-new/END_SEEKING';
export const DURATION_CHANGE = 'video-react-new/DURATION_CHANGE';
export const TIME_UPDATE = 'video-react-new/TIME_UPDATE';
export const VOLUME_CHANGE = 'video-react-new/VOLUME_CHANGE';
export const PROGRESS_CHANGE = 'video-react-new/PROGRESS_CHANGE';
export const RATE_CHANGE = 'video-react-new/RATE_CHANGE';
export const SUSPEND = 'video-react-new/SUSPEND';
export const ABORT = 'video-react-new/ABORT';
export const EMPTIED = 'video-react-new/EMPTIED';
export const STALLED = 'video-react-new/STALLED';
export const LOADED_META_DATA = 'video-react-new/LOADED_META_DATA';
export const LOADED_DATA = 'video-react-new/LOADED_DATA';
export const RESIZE = 'video-react-new/RESIZE';
export const ERROR = 'video-react-new/ERROR';
export const ACTIVATE_TEXT_TRACK = 'video-react-new/ACTIVATE_TEXT_TRACK';

export function handleLoadStart(videoProps) {
  return {
    type: LOAD_START,
    videoProps
  };
}

export function handleCanPlay(videoProps) {
  return {
    type: CAN_PLAY,
    videoProps
  };
}

export function handleWaiting(videoProps) {
  return {
    type: WAITING,
    videoProps
  };
}

export function handleCanPlayThrough(videoProps) {
  return {
    type: CAN_PLAY_THROUGH,
    videoProps
  };
}

export function handlePlaying(videoProps) {
  return {
    type: PLAYING,
    videoProps
  };
}

export function handlePlay(videoProps) {
  return {
    type: PLAY,
    videoProps
  };
}

export function handlePause(videoProps) {
  return {
    type: PAUSE,
    videoProps
  };
}

export function handleEnd(videoProps) {
  return {
    type: END,
    videoProps
  };
}

export function handleSeeking(videoProps) {
  return {
    type: SEEKING,
    videoProps
  };
}

export function handleSeeked(videoProps) {
  return {
    type: SEEKED,
    videoProps
  };
}

export function handleDurationChange(videoProps) {
  return {
    type: DURATION_CHANGE,
    videoProps
  };
}

export function handleTimeUpdate(videoProps) {
  return {
    type: TIME_UPDATE,
    videoProps
  };
}

export function handleVolumeChange(videoProps) {
  return {
    type: VOLUME_CHANGE,
    videoProps
  };
}

export function handleProgressChange(videoProps) {
  return {
    type: PROGRESS_CHANGE,
    videoProps
  };
}

export function handleRateChange(videoProps) {
  return {
    type: RATE_CHANGE,
    videoProps
  };
}

export function handleSuspend(videoProps) {
  return {
    type: SUSPEND,
    videoProps
  };
}

export function handleAbort(videoProps) {
  return {
    type: ABORT,
    videoProps
  };
}

export function handleEmptied(videoProps) {
  return {
    type: EMPTIED,
    videoProps
  };
}

export function handleStalled(videoProps) {
  return {
    type: STALLED,
    videoProps
  };
}

export function handleLoadedMetaData(videoProps) {
  return {
    type: LOADED_META_DATA,
    videoProps
  };
}

export function handleLoadedData(videoProps) {
  return {
    type: LOADED_DATA,
    videoProps
  };
}

export function handleResize(videoProps) {
  return {
    type: RESIZE,
    videoProps
  };
}

export function handleError(videoProps) {
  return {
    type: ERROR,
    videoProps
  };
}

export function handleSeekingTime(time) {
  return {
    type: SEEKING_TIME,
    time
  };
}

export function handleEndSeeking(time) {
  return {
    type: END_SEEKING,
    time
  };
}

export function activateTextTrack(textTrack) {
  return {
    type: ACTIVATE_TEXT_TRACK,
    textTrack
  };
}
