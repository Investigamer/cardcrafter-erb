// Images
import white from '../../../img/frames/m15/regular/w.png';
import blue from '../../../img/frames/m15/regular/u.png';
import black from '../../../img/frames/m15/regular/b.png';
import red from '../../../img/frames/m15/regular/r.png';
import green from '../../../img/frames/m15/regular/g.png';
import multi from '../../../img/frames/m15/regular/m.png';
import artifact from '../../../img/frames/m15/regular/a.png';
import land from '../../../img/frames/m15/regular/l.png';
import colorless from '../../../img/frames/m15/regular/c.png';
import vehicle from '../../../img/frames/m15/regular/v.png';
import whitePT from '../../../img/frames/m15/regular/pt-w.png';
import bluePT from '../../../img/frames/m15/regular/pt-u.png';
import blackPT from '../../../img/frames/m15/regular/pt-b.png';
import redPT from '../../../img/frames/m15/regular/pt-r.png';
import greenPT from '../../../img/frames/m15/regular/pt-g.png';
import multiPT from '../../../img/frames/m15/regular/pt-m.png';
import artifactPT from '../../../img/frames/m15/regular/pt-a.png';
import colorlessPT from '../../../img/frames/m15/regular/pt-c.png';
import vehiclePT from '../../../img/frames/m15/regular/pt-v.png';
import midnight from '../../../img/frames/m15/custom/m15Midnight.png';
import PTInnerFill from '../../../img/frames/m15/custom/m15CustomPTInnerFill.png';

// Thumbs
import whiteThumb from '../../../img/frames/m15/regular/w-thumb.png';
import blueThumb from '../../../img/frames/m15/regular/u-thumb.png';
import blackThumb from '../../../img/frames/m15/regular/b-thumb.png';
import redThumb from '../../../img/frames/m15/regular/r-thumb.png';
import greenThumb from '../../../img/frames/m15/regular/g-thumb.png';
import multiThumb from '../../../img/frames/m15/regular/m-thumb.png';
import artifactThumb from '../../../img/frames/m15/regular/a-thumb.png';
import landThumb from '../../../img/frames/m15/regular/l-thumb.png';
import colorlessThumb from '../../../img/frames/m15/regular/c-thumb.png';
import vehicleThumb from '../../../img/frames/m15/regular/v-thumb.png';
import whitePTThumb from '../../../img/frames/m15/regular/pt-w-thumb.png';
import bluePTThumb from '../../../img/frames/m15/regular/pt-u-thumb.png';
import blackPTThumb from '../../../img/frames/m15/regular/pt-b-thumb.png';
import redPTThumb from '../../../img/frames/m15/regular/pt-r-thumb.png';
import greenPTThumb from '../../../img/frames/m15/regular/pt-g-thumb.png';
import multiPTThumb from '../../../img/frames/m15/regular/pt-m-thumb.png';
import artifactPTThumb from '../../../img/frames/m15/regular/pt-a-thumb.png';
import colorlessPTThumb from '../../../img/frames/m15/regular/pt-c-thumb.png';
import vehiclePTThumb from '../../../img/frames/m15/regular/pt-v-thumb.png';
import midnightThumb from '../../../img/frames/m15/custom/m15MidnightThumb.png';
import PTInnerFillThumb from '../../../img/frames/m15/custom/m15CustomPTInnerFillThumb.png';

// Masks
import maskPinline from '../../../img/frames/m15/regular/mask-pinline.png';
import maskTitle from '../../../img/frames/m15/regular/mask-title.png';
import maskType from '../../../img/frames/m15/regular/mask-type.png';
import maskRules from '../../../img/frames/m15/regular/mask-rules.png';
import maskFrame from '../../../img/frames/m15/regular/mask-frame.png';
import maskBorder from '../../../img/frames/m15/regular/mask-border.png';
import maskPinlineThumb from '../../../img/frames/m15/regular/mask-pinline-thumb.png';
import maskTitleThumb from '../../../img/frames/m15/regular/mask-title-thumb.png';
import maskTypeThumb from '../../../img/frames/m15/regular/mask-type-thumb.png';
import maskRulesThumb from '../../../img/frames/m15/regular/mask-rules-thumb.png';
import maskFrameThumb from '../../../img/frames/m15/regular/mask-frame-thumb.png';
import maskBorderThumb from '../../../img/frames/m15/regular/mask-border-thumb.png';

// Types
import { TemplatePack } from '../../types/TemplatePack';
import { defaultMask } from '../../js/constants';
import { TemplateFrameBounds } from '../../types/TemplateFrameBounds';

// Masks and bounds
const cardMasks = [
  defaultMask,
  { image: maskPinline, thumb: maskPinlineThumb, name: 'Pinline' },
  { image: maskTitle, thumb: maskTitleThumb, name: 'Title' },
  { image: maskType, thumb: maskTypeThumb, name: 'Type' },
  { image: maskRules, thumb: maskRulesThumb, name: 'Rules' },
  { image: maskFrame, thumb: maskFrameThumb, name: 'Frame' },
  { image: maskBorder, thumb: maskBorderThumb, name: 'Border' },
];
const ptBounds: TemplateFrameBounds = {
  x: 0.7573,
  y: 0.8848,
  width: 0.188,
  height: 0.0733,
};

const packM15Regular: TemplatePack = {
  frames: [
    {
      name: 'White Frame',
      image: white,
      thumb: whiteThumb,
      masks: cardMasks,
    },
    {
      name: 'Blue Frame',
      image: blue,
      thumb: blueThumb,
      masks: cardMasks,
    },
    {
      name: 'Black Frame',
      image: black,
      thumb: blackThumb,
      masks: cardMasks,
    },
    {
      name: 'Red Frame',
      image: red,
      thumb: redThumb,
      masks: cardMasks,
    },
    {
      name: 'Green Frame',
      image: green,
      thumb: greenThumb,
      masks: cardMasks,
    },
    {
      name: 'Multicolored Frame',
      image: multi,
      thumb: multiThumb,
      masks: cardMasks,
    },
    {
      name: 'Artifact Frame',
      image: artifact,
      thumb: artifactThumb,
      masks: cardMasks,
    },
    {
      name: 'Land Frame',
      image: land,
      thumb: landThumb,
      masks: cardMasks,
    },
    {
      name: 'Colorless Frame',
      image: colorless,
      thumb: colorlessThumb,
      masks: cardMasks,
    },
    {
      name: 'Vehicle Frame',
      image: vehicle,
      thumb: vehicleThumb,
      masks: cardMasks,
    },
    {
      name: 'White Power/Toughness',
      image: whitePT,
      thumb: whitePTThumb,
      masks: [defaultMask],
      bounds: ptBounds,
    },
    {
      name: 'Blue Power/Toughness',
      image: bluePT,
      thumb: bluePTThumb,
      masks: [defaultMask],
      bounds: ptBounds,
    },
    {
      name: 'Black Power/Toughness',
      image: blackPT,
      thumb: blackPTThumb,
      masks: [defaultMask],
      bounds: ptBounds,
    },
    {
      name: 'Red Power/Toughness',
      image: redPT,
      thumb: redPTThumb,
      masks: [defaultMask],
      bounds: ptBounds,
    },
    {
      name: 'Green Power/Toughness',
      image: greenPT,
      thumb: greenPTThumb,
      masks: [defaultMask],
      bounds: ptBounds,
    },
    {
      name: 'Multicolored Power/Toughness',
      image: multiPT,
      thumb: multiPTThumb,
      masks: [defaultMask],
      bounds: ptBounds,
    },
    {
      name: 'Artifact Power/Toughness',
      image: artifactPT,
      thumb: artifactPTThumb,
      masks: [defaultMask],
      bounds: ptBounds,
    },
    {
      name: 'Colorless Power/Toughness',
      image: colorlessPT,
      thumb: colorlessPTThumb,
      masks: [defaultMask],
      bounds: ptBounds,
    },
    {
      name: 'Vehicle Power/Toughness',
      image: vehiclePT,
      thumb: vehiclePTThumb,
      masks: [defaultMask],
      bounds: ptBounds,
    },
    {
      name: 'Midnight Frame',
      image: midnight,
      thumb: midnightThumb,
      masks: cardMasks,
    },
    {
      name: 'PT Inner Fill',
      image: PTInnerFill,
      thumb: PTInnerFillThumb,
      masks: [defaultMask],
      bounds: { x: 0.79, y: 0.8977, width: 0.1414, height: 0.04 },
    },
  ],
  version: 'm15Regular',
  artBounds: { x: 0.0767, y: 0.1129, width: 0.8476, height: 0.4429 },
  setSymbolBounds: {
    x: 0.9213,
    y: 0.591,
    width: 0.12,
    height: 0.041,
    vertical: 'center',
    horizontal: 'right',
  },
  watermarkBounds: { x: 0.5, y: 0.7762, width: 0.75, height: 0.2305 },
  textOptions: {
    mana: {
      name: 'Mana Cost',
      text: '',
      y: 0.0613,
      width: 0.9292,
      height: 71 / 2100,
      oneLine: true,
      size: 71 / 1638,
      align: 'right',
      shadowX: -0.001,
      shadowY: 0.0029,
      manaCost: true,
      manaSpacing: 0,
    },
    title: {
      name: 'Title',
      text: '',
      x: 0.0854,
      y: 0.0522,
      width: 0.8292,
      height: 0.0543,
      oneLine: true,
      font: 'belerenb',
      size: 0.0381,
    },
    type: {
      name: 'Type',
      text: '',
      x: 0.0854,
      y: 0.5664,
      width: 0.8292,
      height: 0.0543,
      oneLine: true,
      font: 'belerenb',
      size: 0.0324,
    },
    rules: {
      name: 'Rules Text',
      text: '',
      x: 0.086,
      y: 0.6303,
      width: 0.828,
      height: 0.2875,
      size: 0.0362,
    },
    pt: {
      name: 'Power/Toughness',
      text: '',
      x: 0.7928,
      y: 0.902,
      width: 0.1367,
      height: 0.0372,
      size: 0.0372,
      font: 'belerenbsc',
      oneLine: true,
      align: 'center',
    },
  },
};

export default packM15Regular;
