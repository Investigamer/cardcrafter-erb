import { useState, useEffect, useRef } from 'react';
import { CardDetails } from '../types/CardDetails';
import { scaleX, scaleY } from '../js/helpers';

const useArt = (Card: CardDetails) => {
  // Track the completed frame
  const [loadedArt, setLoadedArt] = useState<HTMLCanvasElement | null>(null);

  // Canvas Ref
  const canvas = useRef(document.createElement('canvas'));

  useEffect(() => {
    // Set up the canvas
    canvas.current.width = Card.width;
    canvas.current.height = Card.height;
    const ctx = canvas.current.getContext('2d')!;
    ctx.save();
    ctx.translate(scaleX(Card.artX, Card), scaleY(Card.artY, Card));
    ctx.rotate((Math.PI / 180) * (Card.artRotate || 0));
    ctx.drawImage(
      Card.art,
      0,
      0,
      Card.art.width * Card.artZoom,
      Card.art.height * Card.artZoom
    );
    ctx.restore();
    setLoadedArt(canvas.current);
  }, [Card]);

  return { loadedArt };
};

export default useArt;
