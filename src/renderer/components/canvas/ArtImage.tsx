import React, { Dispatch, SetStateAction } from 'react';
import { Group, Image } from 'react-konva';
import { CardDetails } from '../../types/CardDetails';
import { getInput, updateArtPosition } from '../../js/helpers';
import { imageBlank } from '../../js/constants';

interface ShapeAttributes {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

interface ArtImageDetails {
  Card: CardDetails;
  setCard: Dispatch<SetStateAction<CardDetails>>;
}

const ArtImage = (props: ArtImageDetails) => {
  const { Card, setCard } = props;

  // Tracking movement
  let trackDragX = 0;
  let trackDragY = 0;

  return (
    <Group>
      {Card.art !== imageBlank && (
        <Image
          draggable
          onDragEnd={() => updateArtPosition(Card)}
          onDragMove={(e) => {
            // Track attributes
            const artScale = getInput('#art-zoom');
            const artRotate = getInput('#art-rotate');
            const artX = getInput('#art-x');
            const artY = getInput('#art-y');
            const obj: ShapeAttributes = {
              x: e.target.x(),
              y: e.target.y(),
              width: e.target.width(),
              height: e.target.height(),
              rotation: e.target.rotation(),
            };

            // Check direction for scale
            let scaleFactor;
            if (trackDragY < obj.y) scaleFactor = 1.005;
            else if (trackDragY > obj.y) scaleFactor = 0.995;
            else scaleFactor = 1;

            // Check the direction for rotate
            let rotateFactor;
            if (trackDragX > obj.x) rotateFactor = 1;
            else if (trackDragX < obj.x) rotateFactor = -1;
            else rotateFactor = 0;

            // Set next tracking
            trackDragX = obj.x;
            trackDragY = obj.y;

            // Scale
            if (e.evt.shiftKey && scaleFactor !== 1) {
              e.target.height(obj.height * scaleFactor);
              e.target.width(obj.width * scaleFactor);
              artScale.value = (e.target.height() / Card.art.height).toString();
            }

            // Rotation
            if (e.evt.ctrlKey && rotateFactor !== 0) {
              let rotation = parseInt(artRotate.value, 10) + rotateFactor;
              if (rotation >= 360) rotation -= 360;
              artRotate.value = rotation.toString();
              e.target.rotation(rotation);
            }

            // Prevent movement if not needed
            if (
              e.evt.ctrlKey ||
              e.evt.shiftKey ||
              (rotateFactor === 0 && scaleFactor === 1)
            ) {
              // Don't drag X or Y
              e.target.x(Card.artX);
              e.target.y(Card.artY);
            }
            artX.value = e.target.x().toString();
            artY.value = e.target.y().toString();
          }}
          image={Card.art}
          x={Card.artX}
          y={Card.artY}
          offsetX={Card.artOffsetX}
          offsetY={Card.artOffsetY}
          rotation={Card.artRotate}
          width={Card.art.width * Card.artZoom}
          height={Card.art.height * Card.artZoom}
        />
      )}
    </Group>
  );
};

export default ArtImage;
