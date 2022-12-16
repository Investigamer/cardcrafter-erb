import React, { useState } from 'react';
import { TemplatePack } from '../types/TemplatePack';

const useTemplatePack = (pack: TemplatePack) => {
  // Use States
  const [selectedFrame, setSelectedFrame] = useState(pack.frames[0]);
  const [selectedMask, setSelectedMask] = useState(selectedFrame.masks[0]);

  return {
    selectedFrame,
    selectedMask,
    setSelectedFrame,
    setSelectedMask,
  };
};

export default useTemplatePack;
