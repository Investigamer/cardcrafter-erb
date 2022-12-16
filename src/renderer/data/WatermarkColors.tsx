import React from 'react';

interface WatermarkColor {
  value: string;
  name: string;
}

const WatermarkColors: WatermarkColor[] = [
  { value: 'none', name: 'None' },
  { value: 'default', name: 'Actual Image' },
  { value: '#b79d58', name: 'White' },
  { value: '#8cacc5', name: 'Blue' },
  { value: '#5e5e5e', name: 'Black' },
  { value: '#c66d39', name: 'Red' },
  { value: '#598c52', name: 'Green' },
  { value: '#cab34d', name: 'Gold' },
  { value: '#647d86', name: 'Artifact/Colorless' },
  { value: '#5e5448', name: 'Land' },
  { value: '#ffffff', name: 'True White' },
  { value: '#000000', name: 'True Black' },
];

export default WatermarkColors;
