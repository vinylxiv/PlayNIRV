import MainScene from './mainScene';
export type scaleMode = 'FIT' | 'SMOOTH';

export const DEFAULT_WIDTH: number = 1000;
export const DEFAULT_HEIGHT: number = 1000;
export const MAX_WIDTH: number = DEFAULT_WIDTH * 1.5;
export const MAX_HEIGHT: number = DEFAULT_HEIGHT * 1.5;
export let SCALE_MODE: scaleMode = 'SMOOTH';


export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  parent: 'application',

  scale: {
    mode: Phaser.Scale.RESIZE
  },

  scene: MainScene,
  seed: [(Date.now() * Math.random()).toString()],

  title: 'NIRV',
  url: 'www.playnirv.com',
  version: '0.0.1',

  input: {
    keyboard: {
      target: window
    },
    mouse: {
      target: null
    },
    activePointers: 1,
    touch: {
      target: null,
      capture: true
    },
    smoothFactor: 0,
    gamepad: false,
    windowEvents: true
  },
  disableContextMenu: true,

  backgroundColor: '#5E5E5E',
  render: {
    antialias: true,
    antialiasGL: true,
    pixelArt: false,
    roundPixels: true,
    transparent: false,
    clearBeforeRender: true,
    premultipliedAlpha: false,
    failIfMajorPerformanceCaveat: false,
    powerPreference: 'high-performance',
    batchSize: 2000,
    desynchronized: true
  },

  physics: {
    default: 'arcade'
  },

  loader: {
    baseURL: '',
    path: '',
    maxParallelDownloads: 4,
    crossOrigin: undefined,
    responseType: '',
    async: true,
    user: '',
    password: '',
    timeout: 0
  },

  dom: {
    createContainer: false,
    behindCanvas: false
  },

  fps: {
    min: 5,
    panicMax: 60,
    target: 30,
    forceSetTimeOut: false
  },

  banner: {
    hidePhaser: false,
    text: '#FFFFFF',
    background: [
      '#000000'
    ]
  }
};
