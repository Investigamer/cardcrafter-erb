import React from 'react';
import { Group, Image } from 'react-konva';
import { CardDetails } from 'renderer/types/CardDetails';
import { TemplateFrame } from '../../types/TemplateFrame';
import useFrame from '../../hooks/useFrame';

const FrameImage = (props: { frame: TemplateFrame; Card: CardDetails }) => {
  const { frame, Card } = props;
  const { loadedFrame } = useFrame(frame, Card);
  return <Group>{loadedFrame && <Image image={loadedFrame} />}</Group>;
};

export default FrameImage;
