import { createStore, Store, Unsubscribe } from 'redux';

import reducer, { RootState } from './reducers';
import * as playerActions from './actions/player';
import * as videoActions from './actions/video';

type BindThis<T> = T extends (this: any, ...args: infer Args) => infer Return
  ? (...args: Args) => Return
  : never;

type CombinedActions = typeof playerActions & typeof videoActions;

type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

export type ActionCreators = {
  [K in FunctionKeys<CombinedActions>]: BindThis<CombinedActions[K]>;
};

export interface VideoAPI {
  play(): Promise<void> | void;
  pause(): Promise<void> | void;
  load(): void;
  addTextTrack(
    kind: TextTrackKind,
    label?: string,
    language?: string
  ): TextTrack;
  canPlayType(
    ...args: Parameters<HTMLVideoElement['canPlayType']>
  ): CanPlayTypeResult;
  togglePlay(): void;
  seek(time: number): void;
  forward(seconds: number): void;
  replay(seconds: number): void;
  toggleFullscreen(): void;
  playbackRate: number;
  muted: boolean;
  volume: number;
  videoWidth: number;
  videoHeight: number;
  video?: HTMLVideoElement | null;
}

export default class Manager {
  public store: Store<RootState>;

  public video: VideoAPI | null = null;

  public rootElement: HTMLElement | null = null;

  private boundActions?: ActionCreators;

  constructor(store?: Store<RootState>) {
    this.store = store || createStore(reducer);
  }

  getActions(): ActionCreators {
    if (this.boundActions) {
      return this.boundActions;
    }

    const actions: CombinedActions = {
      ...playerActions,
      ...videoActions,
    };

    const bound = Object.keys(actions).reduce((acc, key) => {
      const creator = actions[key as keyof CombinedActions];
      if (typeof creator !== 'function') {
        return acc;
      }

      (acc as Record<string, ActionCreators[keyof ActionCreators]>)[key] = ((
        ...args: unknown[]
      ) => {
        const action = (
          creator as (...creatorArgs: unknown[]) => unknown
        ).apply(this, args);
        if (typeof action !== 'undefined') {
          this.store.dispatch(action as never);
        }
      }) as ActionCreators[keyof ActionCreators];

      return acc;
    }, {} as Partial<ActionCreators>);

    this.boundActions = bound as ActionCreators;
    return this.boundActions;
  }

  getState(): RootState {
    return this.store.getState();
  }

  subscribeToStateChange<T = RootState>(
    listener: (state: T, prevState: T) => void,
    getState: () => T = this.getState.bind(this) as () => T
  ): Unsubscribe {
    let prevState = getState();

    const handleChange = () => {
      const state = getState();
      if (state === prevState) {
        return;
      }
      const prevStateCopy = prevState;
      prevState = state;
      listener(state, prevStateCopy);
    };

    return this.store.subscribe(handleChange);
  }

  subscribeToOperationStateChange(
    listener: (
      state: RootState['operation'],
      prev: RootState['operation']
    ) => void
  ): Unsubscribe {
    return this.subscribeToStateChange(
      listener,
      () => this.getState().operation
    );
  }

  subscribeToPlayerStateChange(
    listener: (state: RootState['player'], prev: RootState['player']) => void
  ): Unsubscribe {
    return this.subscribeToStateChange(listener, () => this.getState().player);
  }
}
