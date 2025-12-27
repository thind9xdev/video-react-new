/**

 * Copyright (c) 2016 Video-React contributors
 * Copyright (c) 2025 ZingMe.Vn
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
export const PICTURE_IN_PICTURE_CHANGE =
  'video-react-new/PICTURE_IN_PICTURE_CHANGE';
export const LOOP_CHANGE = 'video-react-new/LOOP_CHANGE';
export const THEATER_MODE_CHANGE = 'video-react-new/THEATER_MODE_CHANGE';
export const QUALITY_CHANGE = 'video-react-new/QUALITY_CHANGE';

type VideoProps = Record<string, unknown>;

export function handleLoadStart(videoProps: VideoProps) {
  return {
    type: LOAD_START,
    videoProps,
  };
}

export function handleCanPlay(videoProps: VideoProps) {
  return {
    type: CAN_PLAY,
    videoProps,
  };
}

export function handleWaiting(videoProps: VideoProps) {
  return {
    type: WAITING,
    videoProps,
  };
}

export function handleCanPlayThrough(videoProps: VideoProps) {
  return {
    type: CAN_PLAY_THROUGH,
    videoProps,
  };
}

export function handlePlaying(videoProps: VideoProps) {
  return {
    type: PLAYING,
    videoProps,
  };
}

export function handlePlay(videoProps: VideoProps) {
  return {
    type: PLAY,
    videoProps,
  };
}

export function handlePause(videoProps: VideoProps) {
  return {
    type: PAUSE,
    videoProps,
  };
}

export function handleEnd(videoProps: VideoProps) {
  return {
    type: END,
    videoProps,
  };
}

export function handleSeeking(videoProps: VideoProps) {
  return {
    type: SEEKING,
    videoProps,
  };
}

export function handleSeeked(videoProps: VideoProps) {
  return {
    type: SEEKED,
    videoProps,
  };
}

export function handleDurationChange(videoProps: VideoProps) {
  return {
    type: DURATION_CHANGE,
    videoProps,
  };
}

export function handleTimeUpdate(videoProps: VideoProps) {
  return {
    type: TIME_UPDATE,
    videoProps,
  };
}

export function handleVolumeChange(videoProps: VideoProps) {
  return {
    type: VOLUME_CHANGE,
    videoProps,
  };
}

export function handleProgressChange(videoProps: VideoProps) {
  return {
    type: PROGRESS_CHANGE,
    videoProps,
  };
}

export function handleRateChange(videoProps: VideoProps) {
  return {
    type: RATE_CHANGE,
    videoProps,
  };
}

export function handleSuspend(videoProps: VideoProps) {
  return {
    type: SUSPEND,
    videoProps,
  };
}

export function handleAbort(videoProps: VideoProps) {
  return {
    type: ABORT,
    videoProps,
  };
}

export function handleEmptied(videoProps: VideoProps) {
  return {
    type: EMPTIED,
    videoProps,
  };
}

export function handleStalled(videoProps: VideoProps) {
  return {
    type: STALLED,
    videoProps,
  };
}

export function handleLoadedMetaData(videoProps: VideoProps) {
  return {
    type: LOADED_META_DATA,
    videoProps,
  };
}

export function handleLoadedData(videoProps: VideoProps) {
  return {
    type: LOADED_DATA,
    videoProps,
  };
}

export function handleResize(videoProps: VideoProps) {
  return {
    type: RESIZE,
    videoProps,
  };
}

export function handleError(videoProps: VideoProps) {
  return {
    type: ERROR,
    videoProps,
  };
}

export function handleSeekingTime(time: number) {
  return {
    type: SEEKING_TIME,
    time,
  };
}

export function handleEndSeeking(time: number) {
  return {
    type: END_SEEKING,
    time,
  };
}

export function activateTextTrack(textTrack: TextTrack | null) {
  return {
    type: ACTIVATE_TEXT_TRACK,
    textTrack,
  };
}

export function handlePictureInPictureChange(isPictureInPicture: boolean) {
  return {
    type: PICTURE_IN_PICTURE_CHANGE,
    isPictureInPicture,
  };
}

export function handleLoopChange(loop: boolean) {
  return {
    type: LOOP_CHANGE,
    loop,
  };
}

export function handleTheaterModeChange(isTheater: boolean) {
  return {
    type: THEATER_MODE_CHANGE,
    isTheater,
  };
}

export function handleQualityChange(quality: string) {
  return {
    type: QUALITY_CHANGE,
    quality,
  };
}
