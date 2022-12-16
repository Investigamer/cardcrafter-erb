import { TemplateFrame } from './TemplateFrame';
import { TextItem } from './TextItem';

export interface TemplatePack {
  frames: TemplateFrame[];
  callback?: () => null;
  version?: string;
  artBounds?: { x: number; y: number; width: number; height: number };
  setSymbolBounds?: {
    x: number;
    y: number;
    width: number;
    height: number;
    vertical: 'center' | 'left' | 'right';
    horizontal: 'center' | 'left' | 'right';
  };
  watermarkBounds?: { x: number; y: number; width: number; height: number };
  textOptions?: {
    [key: string]: TextItem;
  };
}
