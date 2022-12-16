import { Dispatch, SetStateAction } from 'react';
import { TemplatePack } from '../types/TemplatePack';
import { TemplateFrame } from '../types/TemplateFrame';
import { TemplateFrameMask } from '../types/TemplateFrameMask';
import { CardDetails } from '../types/CardDetails';
import { toggleCollapse } from '../js/helpers';
import { imageLeft, imageMiddle, imageRight } from '../js/constants';

type FramePickerDetails = {
  pack: TemplatePack;
  selectedFrame: TemplateFrame;
  selectedMask: TemplateFrameMask;
  setSelectedFrame: Dispatch<SetStateAction<TemplateFrame>>;
  setSelectedMask: Dispatch<SetStateAction<TemplateFrameMask>>;
  Card: CardDetails;
  setCard: Dispatch<SetStateAction<CardDetails>>;
};

const FramePicker = (props: FramePickerDetails) => {
  const {
    pack,
    selectedFrame,
    selectedMask,
    setSelectedMask,
    setSelectedFrame,
    Card,
    setCard,
  } = props;

  const addFrame = (upperMask: TemplateFrameMask | null = null) => {
    const newFrame = JSON.parse(JSON.stringify(selectedFrame));
    newFrame.mask = JSON.parse(JSON.stringify(selectedMask));
    if (upperMask) {
      newFrame.upperMask = JSON.parse(JSON.stringify(upperMask));
    }
    Card.frames.push(newFrame);
    setCard({ ...Card });
  };

  return (
    <div className="readable-background margin-bottom padding">
      <h5 className="margin-bottom padding input-description">
        Select a Frame Image and a Mask, then add it to your card
      </h5>
      <div className="split-grid margin-bottom">
        <div id="frame-picker" className="frame-picker">
          {pack.frames.map((frame) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              key={frame.name}
              className={
                frame === selectedFrame
                  ? 'frame-option selected'
                  : 'frame-option'
              }
              onClick={() => {
                if (frame !== selectedFrame) {
                  setSelectedMask(frame.masks[0]);
                  setSelectedFrame(frame);
                }
              }}
              onDoubleClick={() => addFrame()}
            >
              <img
                src={'thumb' in frame ? frame.thumb : frame.image}
                alt={frame.name}
              />
            </div>
          ))}
        </div>
        <div id="mask-picker" className="mask-picker">
          {selectedFrame.masks.map((mask) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              key={mask.name}
              className={
                mask === selectedMask ? 'mask-option selected' : 'mask-option'
              }
              onClick={() => setSelectedMask(mask)}
              onDoubleClick={() => addFrame()}
            >
              <img
                src={'thumb' in mask ? mask.thumb : mask.image}
                alt={mask.name}
              />
              <p>{mask.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="input-grid margin-bottom">
        <button
          id="addToFull"
          type="button"
          className="input"
          onClick={() => addFrame()}
        >
          Add Frame to Card
        </button>
        <button
          id="addToRightHalf"
          type="button"
          className="input"
          onClick={() => addFrame({ ...imageRight })}
        >
          Add Frame to Card (Right Half)
        </button>
      </div>
      <h5
        className="collapsible collapsed padding input-description"
        onClick={(e) => toggleCollapse(e)}
      >
        More options
      </h5>
      <div>
        <div className="input-grid margin-bottom">
          <button
            id="addToLeftHalf"
            type="button"
            className="input"
            onClick={() => addFrame({ ...imageLeft })}
          >
            Add Frame to Card (Left Half)
          </button>
          <button
            id="addToMiddleThird"
            type="button"
            className="input"
            onClick={() => addFrame({ ...imageMiddle })}
          >
            Add Frame to Card (Middle Third)
          </button>
        </div>
        <h5 className="padding input-description">
          You can now double click frames and masks to add them to the card. You
          card. You can do so while holding the shift, control, or alt keys to
          keys to add to the right half, left half, or middle third,
          respectively.
        </h5>
      </div>
      <h5 id="selectedPreview" className="padding input-description">
        (Selected: {selectedFrame.name}, {selectedMask.name})
      </h5>
    </div>
  );
};

export default FramePicker;
