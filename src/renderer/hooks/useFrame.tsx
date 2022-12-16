import { useState, useEffect, useRef } from 'react';
import { CardDetails } from '../types/CardDetails';
import { TemplateFrame } from '../types/TemplateFrame';
import { hsl } from '../js/helpers';

const useFrame = (frame: TemplateFrame, Card: CardDetails) => {
  // How many frame elements need to load?
  let numTotal = 1;
  if (frame.mask!.name !== 'No Mask') numTotal += 1;
  if ('upperMask' in frame) numTotal += 1;

  // Track the completed frame
  const [loadedFrame, setLoadedFrame] = useState<HTMLCanvasElement | null>(
    null
  );

  // Track the loaded elements
  const [numLoaded, setNumLoaded] = useState(0);

  // Trigger a numLoaded check
  const [edited, setEdited] = useState(Math.random());

  // Canvas Ref
  const canvas = useRef(document.createElement('canvas'));

  useEffect(() => {
    // Set up the canvas
    canvas.current.width = Card.width;
    canvas.current.height = Card.height;
    const ctx = canvas.current.getContext('2d');

    // Set up the frame image
    const frameImage = new window.Image();
    frameImage.crossOrigin = 'Anonymous';
    frameImage.onload = () => {
      ctx!.drawImage(
        frameImage,
        'bounds' in frame ? frame.bounds!.x * Card.width : 0,
        'bounds' in frame ? frame.bounds!.y * Card.height : 0,
        'bounds' in frame ? frame.bounds!.width * Card.width : Card.width,
        'bounds' in frame ? frame.bounds!.height * Card.height : Card.height
      );

      // Modifications
      if ('mods' in frame) {
        // Hue, Saturation, Lightness
        if ('hsl' in frame.mods! && frame.mods.hsl !== [0, 0, 0]) {
          const [h, s, l] = frame.mods.hsl!;
          hsl(canvas.current, h, s, l);
        }
      }
      setEdited(Math.random());

      // Set up the mask image
      if (frame.mask!.name !== 'No Mask') {
        const maskImage = new window.Image();
        maskImage.crossOrigin = 'Anonymous';
        maskImage.onload = () => {
          ctx!.globalCompositeOperation = 'destination-in';
          ctx!.drawImage(maskImage, 0, 0, Card.width, Card.height);
          setEdited(Math.random());
        };
        maskImage.src = frame.mask!.image;
      }

      // Set up the upper mask image
      if ('upperMask' in frame) {
        const upperMaskImage = new window.Image();
        upperMaskImage.crossOrigin = 'Anonymous';
        upperMaskImage.onload = () => {
          ctx!.globalCompositeOperation = 'destination-in';
          ctx!.drawImage(upperMaskImage, 0, 0, Card.width, Card.height);
          setEdited(Math.random());
        };
        upperMaskImage.src = frame.upperMask!.image;
      }
    };
    frameImage.src = frame.image;
  }, [Card.height, Card.width, frame]);

  useEffect(() => {
    setNumLoaded((n) => n + 1);
    if (numLoaded === numTotal) {
      setLoadedFrame(canvas.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edited]);

  return { loadedFrame };
};

export default useFrame;
