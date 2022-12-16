import { TemplateFrameMask } from './TemplateFrameMask';
import { TemplateFrameBounds } from './TemplateFrameBounds';

export type TemplateFrame = {
  name: string;
  image: string;
  thumb: string;
  masks: TemplateFrameMask[];
  bounds?: TemplateFrameBounds;
  mask?: TemplateFrameMask;
  upperMask?: TemplateFrameMask;
  mods?: {
    hsl?: [number, number, number];
  };
};
