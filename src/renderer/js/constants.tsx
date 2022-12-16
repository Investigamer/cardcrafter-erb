// Images
import black from 'img/black.png';
import blank from 'img/blank.png';
import right from 'img/frames/maskRightHalf.png';
import left from 'img/frames/maskLeftHalf.png';
import middle from 'img/frames/maskMiddleThird.png';
import corner from 'img/frames/cornerCutout.png';

// Thumbs
import blackThumb from 'img/blackThumb.png';
import blankThumb from 'img/blankThumb.png';
import rightThumb from 'img/frames/maskRightHalfThumb.png';
import leftThumb from 'img/frames/maskLeftHalfThumb.png';
import middleThumb from 'img/frames/maskMiddleThirdThumb.png';
import cornerThumb from 'img/frames/cornerCutoutThumb.png';
import { CardDetails } from '../types/CardDetails';

// CORS Proxy Link
export const corsProxy = 'https://api.codetabs.com/v1/proxy?quest=';

// Cache an image object
export function cacheImage(src: string) {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = src;
  return img;
}

// Icons images/masks
export const imageBlack = new Image();
imageBlack.crossOrigin = 'anonymous';
imageBlack.src = black;

export const imageBlank = new Image();
imageBlank.crossOrigin = 'anonymous';
imageBlank.src = blank;

export const imageRight = {
  name: 'Right Half',
  image: right,
  thumb: rightThumb,
  obj: cacheImage(right),
};

export const imageLeft = {
  name: 'Left Half',
  image: left,
  thumb: leftThumb,
  obj: cacheImage(left),
};

export const imageMiddle = {
  name: 'Middle Third',
  image: middle,
  thumb: middleThumb,
  obj: cacheImage(middle),
};

export const imageCorner = {
  name: 'Corner',
  image: corner,
  thumb: cornerThumb,
  obj: cacheImage(corner),
};

// Default values
export const defaultMask = {
  name: 'No Mask',
  image: imageBlack.src,
  thumb: blackThumb,
  obj: imageBlack,
};

// Card object defaults
export const card: CardDetails = {
  // Dimensions
  width: 750,
  height: 1050,
  finalWidth: 1500,
  finalHeight: 2100,
  marginX: 0,
  marginY: 0,

  // Art
  art: imageBlank,
  artSource: imageBlank.src,
  artX: 0,
  artY: 0,
  artZoom: 1,
  artRotate: 0,
  artBounds: { x: 0.0767, y: 0.1129, width: 0.8476, height: 0.4429 },
  artUpscale: null,
  artUpscaleFactor: null,

  // Track art dragging
  draggingArt: false,
  lastArtDragTime: 0,
  dragStartX: 0,
  dragStartY: 0,
  dragEndX: 0,
  dragEndY: 0,

  // Set Symbol
  setSymbol: imageBlank,
  setSymbolSource: imageBlank.src,
  setSymbolX: 0,
  setSymbolY: 0,
  setSymbolZoom: 1,
  setSymbolBounds: {
    x: 0.9213,
    y: 0.591,
    width: 0.12,
    height: 0.041,
    vertical: 'center',
    horizontal: 'right',
  },

  // Watermark
  watermark: imageBlank,
  watermarkSource: imageBlank.src,
  watermarkX: 0,
  watermarkY: 0,
  watermarkSet: null,
  watermarkZoom: 1,
  watermarkLeft: '#b79d58',
  watermarkRight: 'none',
  watermarkOpacity: 0.4,
  watermarkBounds: { x: 0.5, y: 0.7762, width: 0.75, height: 0.2305 },

  // Toggles
  noCorners: false,
  guidelines: false,
  guidelinesArt: false,
  landscape: false,
  autoload: true,

  // Text info
  infoYear: new Date().getFullYear(),
  version: '',
  name: '',
  artist: '',
  set: '',
  type: '',
  manaSymbols: [],

  // Stuff to draw
  frames: [],

  // Style
  style: {
    backgroundColor: '#0000',
  },

  // Text Items
  text: {},
};
