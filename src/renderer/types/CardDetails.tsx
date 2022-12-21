/*
TYPE DEFINITION: Card Canvas Details
 */

import { TemplateFrame } from './TemplateFrame';
import { TextItem } from './TextItem';
import { TemplateFrameBounds } from './TemplateFrameBounds';

export interface CardDetails {
  // Dimensions
  width: number;
  height: number;
  finalWidth: number;
  finalHeight: number;
  marginX: number;
  marginY: number;

  // Art
  art: HTMLImageElement;
  artSource: string | null;
  artX: number;
  artY: number;
  artZoom: number;
  artRotate: number;
  artBounds: TemplateFrameBounds;
  artOffsetX: number;
  artOffsetY: number;
  artUpscale: null | string;
  artUpscaleFactor: null | number;

  // Track art dragging
  draggingArt: boolean;
  lastArtDragTime: number;
  dragStartX: number;
  dragStartY: number;
  dragEndX: number;
  dragEndY: number;

  // Set Symbol
  setSymbol: HTMLImageElement;
  setSymbolSource: string | null;
  setSymbolX: number;
  setSymbolY: number;
  setSymbolZoom: number;
  setSymbolBounds: {
    x: number;
    y: number;
    width: number;
    height: number;
    vertical: 'center' | 'top' | 'bottom';
    horizontal: 'center' | 'left' | 'right';
  };

  // Watermark
  watermark: HTMLImageElement;
  watermarkSource: string | null;
  watermarkX: number;
  watermarkY: number;
  watermarkSet: string | null;
  watermarkZoom: number;
  watermarkLeft: string;
  watermarkRight: string;
  watermarkOpacity: number;
  watermarkBounds: TemplateFrameBounds;

  // Toggles
  noCorners: boolean;
  guidelines: boolean;
  guidelinesArt: boolean;
  landscape: boolean;
  autoload: boolean;

  // Text info
  infoYear: number;
  version: string;
  name: string;
  artist: string;
  set: string;
  type: string;
  manaSymbols: Array<string | null>;

  // Stuff to draw
  frames: TemplateFrame[];

  // Style
  style: {
    backgroundColor: string;
  };

  // Text Items
  text: { [key: string]: TextItem };
}

export type OnlyKeys = keyof CardDetails;
