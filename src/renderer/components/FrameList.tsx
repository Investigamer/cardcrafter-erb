import React, { Dispatch, SetStateAction, useState } from 'react';
import { CardDetails } from '../types/CardDetails';

type FrameListDetails = {
  Card: CardDetails;
  setCard: Dispatch<SetStateAction<CardDetails>>;
};

const FrameList = (props: FrameListDetails) => {
  const { Card, setCard } = props;
  const [dragID, setDragID] = useState(0);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDragID(Number(e.currentTarget.getAttribute('data-index')));
    e.currentTarget.classList.add('dragging');
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('dragging');
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const element = Card.frames[dragID];
    const target = Number(e.currentTarget.getAttribute('data-index'));
    Card.frames.splice(dragID, 1);
    Card.frames.splice(target, 0, element);
    setCard({ ...Card });
  };

  const removeFrame = (index: number) => {
    Card.frames.splice(index, 1);
    setCard({ ...Card });
  };

  return (
    <div id="frame-list" className="frame-list margin-bottom">
      {Card.frames
        .map((frame, i) => (
          <div
            key={i}
            draggable
            data-index={i}
            className="draggable frame-element"
            onDragStart={(e) => onDragStart(e)}
            onDragEnd={(e) => onDragEnd(e)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e)}
          >
            <img
              src={'thumb' in frame ? frame.thumb : frame.image}
              alt={frame.name}
            />
            <img
              src={
                'thumb' in frame.mask! ? frame.mask!.thumb : frame.mask!.image
              }
              alt={frame.name}
            />
            <h4>{`${frame.name}, ${frame.mask!.name}${
              'upperMask' in frame ? `, ${frame.upperMask!.name}` : ''
            }`}</h4>
            <h4 className="frame-element-close" onClick={() => removeFrame(i)}>
              X
            </h4>
          </div>
        ))
        .reverse()}
    </div>
  );
};

export default FrameList;
