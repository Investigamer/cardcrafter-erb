export type TextItem = {
  name: string;
  text: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  oneLine?: boolean;
  size?: number;
  align?: 'center' | 'left' | 'right';
  shadowX?: number;
  shadowY?: number;
  manaCost?: boolean;
  manaSpacing?: number;
  font?: string;
};
