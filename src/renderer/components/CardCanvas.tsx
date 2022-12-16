import { Group, Image, Layer, Stage } from 'react-konva';
import { useEffect, useState } from 'react';
import { CardDetails } from '../types/CardDetails';
import ArtImage from './canvas/ArtImage';
import FrameImage from './canvas/FrameImage';
import WatermarkImage from './canvas/WatermarkImage';
import { scaleX, scaleY, getInput } from '../js/helpers';
import { imageBlank } from '../js/constants';

const CardCanvas = (props: { Card: CardDetails }) => {
  const { Card } = props;
  const [uniqueKeyArt, setUniqueKeyArt] = useState(Math.random());
  const [uniqueKeyFrames, setUniqueKeyFrames] = useState(Math.random());
  const [uniqueKeyWatermark, setUniqueKeyWatermark] = useState(Math.random());
  const [uniqueKeySetSymbol, setUniqueKeySetSymbol] = useState(Math.random());

  useEffect(() => {
    setUniqueKeyArt(Math.random());
    setUniqueKeyFrames(Math.random());
    setUniqueKeyWatermark(Math.random);
    setUniqueKeySetSymbol(Math.random);
  }, [Card]);

  return (
    <Stage
      className={
        Card.noCorners
          ? 'creator-canvas box-shadow'
          : 'creator-canvas box-shadow corner-cutout'
      }
      id="previewCanvas"
      width={Card.width}
      height={Card.height}
      style={Card.style}
    >
      <Layer>
        <Group key={uniqueKeyArt}>
          {Card.art !== imageBlank && <ArtImage Card={Card} />}
        </Group>
        <Group key={uniqueKeyFrames}>
          {Card.frames.map((frame, index) => (
            <FrameImage key={index} frame={frame} Card={Card} />
          ))}
        </Group>
        <Group key={uniqueKeyWatermark}>
          {Card.watermark !== imageBlank && <WatermarkImage Card={Card} />}
        </Group>
        <Group key={uniqueKeySetSymbol}>
          {Card.setSymbol !== imageBlank && (
            <Image
              draggable
              onDragEnd={(e) => {
                getInput('#setSymbol-y').value = e.target.y().toString();
                getInput('#setSymbol-x').value = e.target.x().toString();
              }}
              onDragMove={(e) => {
                if (e.evt.shiftKey || e.evt.ctrlKey) {
                  e.target.x(scaleX(Card.setSymbolX, Card));
                  e.target.y(scaleY(Card.setSymbolY, Card));
                }
              }}
              image={Card.setSymbol}
              x={scaleX(Card.setSymbolX, Card)}
              y={scaleY(Card.setSymbolY, Card)}
              width={Card.setSymbol.width * Card.setSymbolZoom}
              height={Card.setSymbol.height * Card.setSymbolZoom}
            />
          )}
        </Group>
      </Layer>
    </Stage>
  );
};

export default CardCanvas;
