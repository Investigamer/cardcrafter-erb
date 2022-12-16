import { useState, useEffect, useRef } from 'react';
import { CardDetails } from '../types/CardDetails';
import { scaleHeight, scaleWidth, scaleX, scaleY } from '../js/helpers';
import { imageBlank, imageRight } from '../js/constants';

const useWatermark = (Card: CardDetails) => {
  // Track the completed frame
  const [loadedWatermark, setLoadedWatermark] =
    useState<HTMLCanvasElement | null>(null);

  // Canvas Ref
  const canvas = useRef(document.createElement('canvas'));

  useEffect(() => {
    // Set up the canvas
    canvas.current.width = Card.width;
    canvas.current.height = Card.height;
    const ctx = canvas.current.getContext('2d')!;

    // Preload vars
    const wmX = Card.watermarkX;
    const wmY = Card.watermarkY;
    const wmWidth = (Card.watermark.width * Card.watermarkZoom) / 100;
    const wmHeight = (Card.watermark.height * Card.watermarkZoom) / 100;

    // Insert canvas items
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, Card.width, Card.height);
    if (
      Card.watermarkLeft !== 'none' &&
      Card.watermark !== imageBlank &&
      Card.watermarkZoom > 0
    ) {
      if (Card.watermarkRight !== 'none') {
        ctx.drawImage(
          imageRight.obj,
          scaleX(0, Card),
          scaleY(0, Card),
          scaleWidth(1, Card),
          scaleHeight(1, Card)
        );
        ctx.globalCompositeOperation = 'source-in';
        if (Card.watermarkRight === 'default') {
          ctx.drawImage(Card.watermark, wmX, wmY, wmWidth, wmHeight);
        } else {
          ctx.fillStyle = Card.watermarkRight;
          ctx.fillRect(0, 0, Card.width, Card.height);
        }
        ctx.globalCompositeOperation = 'destination-over';
      }
      if (Card.watermarkLeft === 'default') {
        ctx.drawImage(Card.watermark, wmX, wmY, wmWidth, wmHeight);
      } else {
        ctx.fillStyle = Card.watermarkLeft;
        ctx.fillRect(0, 0, Card.width, Card.height);
      }
      ctx.globalCompositeOperation = 'destination-in';
      ctx.drawImage(Card.watermark, wmX, wmY, wmWidth, wmHeight);
      ctx.globalAlpha = Card.watermarkOpacity;
      ctx.fillRect(0, 0, Card.width, Card.height);
    }
    setLoadedWatermark(canvas.current);
  }, [Card]);

  return { loadedWatermark };
};

export default useWatermark;
