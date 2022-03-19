export interface IVideoPlayerState1 {
  resizeMode: string;
  paused: boolean;
  muted: boolean;
  volume: number;
  rate: number;
  thumbnail: string;
  isFullscreen: boolean;
  showTimeRemaining: boolean;
  volumeTrackWidth: number;
  volumeFillWidth: number;
  seekerFillWidth: number;
  showControls: boolean;
  volumePosition: number;
  seekerPosition: number;
  volumeOffset: number;
  seekerOffset: number;
  seeking: boolean;
  originallyPaused: boolean;
  scrubbing: boolean;
  loading: boolean;
  currentTime: number;
  error: boolean;
  duration: number;
  player: boolean;
  source: string;
  showRemainingTime: string;
}

export interface IVideoPlayerState {
  isMuted: boolean;
  showControls: boolean;
  isFullScreen: boolean;
}

export interface IAudioPlayerState {
  isMuted: boolean;
  isPaused: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
}
