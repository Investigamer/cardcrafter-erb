import React from 'react';
import { Group, Image } from 'react-konva';
import { CardDetails } from '../../types/CardDetails';
import useWatermark from '../../hooks/useWatermark';

const WatermarkImage = (props: { Card: CardDetails }) => {
  const { Card } = props;
  const { loadedWatermark } = useWatermark(Card);
  return <Group>{loadedWatermark && <Image image={loadedWatermark} />}</Group>;
};

export default WatermarkImage;
