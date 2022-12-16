import React from 'react';
import { Group, Image } from 'react-konva';
import { CardDetails } from '../../types/CardDetails';
import useArt from '../../hooks/useArt';

const ArtImage = (props: { Card: CardDetails }) => {
  const { Card } = props;
  const { loadedArt } = useArt(Card);
  return <Group>{loadedArt && <Image image={loadedArt} />}</Group>;
};

export default ArtImage;
