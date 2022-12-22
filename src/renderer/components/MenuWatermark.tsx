import React, { Dispatch, SetStateAction } from 'react';

// Helper functions
import {
  getWatermark,
  toggleCollapse,
  resetWatermark,
  updateWatermark,
  uploadFile, dropEnter, dropOver, dropLeave, dropUpload, updateSetSymbol
} from '../js/helpers';

// Types
import { CardDetails } from '../types/CardDetails';

// Data
import { corsProxy, imageBlank } from '../js/constants';
import Watermarks from '../data/Watermarks';
import WatermarkColors from '../data/WatermarkColors';

interface MenuWatermarkDetails {
  Card: CardDetails;
  setCard: Dispatch<SetStateAction<CardDetails>>;
}

const MenuWatermark = (props: MenuWatermarkDetails) => {
  const { Card, setCard } = props;

  return (
    <div id="creator-menu-watermark" className="hidden">
      <div className="readable-background padding margin-bottom">
        <h5 className="margin-bottom padding input-description">
          Choose/upload your watermark
        </h5>
        <div className="input-grid">
          <div className="padding drop-area">
            <h5 className="margin-bottom padding input-description">
              Drag and drop
            </h5>
            <input
              type="file"
              multiple={false}
              accept=".png, .svg, .jpg, .jpeg, .bmp"
              placeholder="File Upload"
              className="input"
              onDragEnter={dropEnter}
              onDragOver={dropOver}
              onDragLeave={dropLeave}
              onDrop={(e) => {
                if (e.dataTransfer.files[0].name.includes('.svg')) {
                  dropUpload(e, Card, setCard, getWatermark);
                } else {
                  dropUpload(e, Card, setCard, updateWatermark);
                }
              }}
              onInput={(e) => {
                uploadFile(e.currentTarget.files, Card, setCard, getWatermark);
              }}
            />
          </div>
          <div>
            <input
              type="url"
              placeholder="Via URL"
              className="input margin-bottom"
              onChange={(e) => {
                /* Validate URL, add CORS Proxy */
                const { value } = e.currentTarget;
                if (['http', 'https'].some((v) => value.includes(v))) {
                  if (e.currentTarget.value.includes('.svg')) {
                    getWatermark(`${corsProxy}${value}`, Card, setCard);
                  } else {
                    updateWatermark(`${corsProxy}${value}`, Card, setCard);
                  }
                }
              }}
            />
            <input
              type="text"
              placeholder="Via Set Code"
              className="input"
              onChange={(e) => {
                if (
                  e.currentTarget.value !== Card.watermarkSet &&
                  e.currentTarget.value.length > 1
                ) {
                  Card.watermarkSet = e.currentTarget.value;
                  getWatermark(e.currentTarget.value, Card, setCard);
                }
              }}
            />
          </div>
        </div>
        <h5 className="margin-bottom padding input-description">
          Select lore-based watermarks
        </h5>
        <select
          className="input padding margin-bottom"
          onChange={(e) => {
            if (e.currentTarget.value !== 'none') {
              getWatermark(e.currentTarget.value, Card, setCard);
            }
          }}
        >
          {Watermarks.map((mark) =>
            mark.value !== null ? (
              <option key={mark.name} value={mark.value}>
                {mark.name}
              </option>
            ) : (
              <option key={mark.name} disabled>
                {mark.name}
              </option>
            )
          )}
        </select>
        <h5
          className="collapsible collapsed padding input-description"
          onClick={(e) => toggleCollapse(e)}
        >
          How to find set codes
        </h5>
        <div className="padding">
          <h5 className="margin-top">
            Set codes are the two-three character combinations that represent
            sets. For sets released after 2015, the three-character set code can
            be found in the lower left hand corner.
          </h5>
          <h5 className="margin-top">
            For older sets, the code may be different depending on your use:
          </h5>
          <p className="margin-top padding">
            Set symbol images are named using the same codes as used in{' '}
            <a
              className="underline"
              href="https://scryfall.com/sets"
              target="_blank"
              rel="noreferrer"
            >
              Scryfall
            </a>
            .
          </p>
          <p className="padding">
            For watermarks, please reference{' '}
            <a
              className="underline"
              href="https://keyrune.andrewgioia.com/icons.html"
              target="_blank"
              rel="noreferrer"
            >
              Keyrune
            </a>
            .
          </p>
        </div>
      </div>
      <div className="readable-background padding margin-bottom">
        <h5 className="margin-bottom padding input-description">
          Select watermark colors (left, right)
        </h5>
        <div className="input-grid margin-bottom">
          <select
            className="input"
            id="watermark-left"
            defaultValue={Card.watermarkLeft}
            onChange={(e) => {
              Card.watermarkLeft = e.currentTarget.value;
              setCard({ ...Card });
            }}
          >
            {WatermarkColors.map((color) => (
              <option key={color.name} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
          <select
            className="input"
            id="watermark-right"
            defaultValue={Card.watermarkRight}
            onChange={(e) => {
              Card.watermarkRight = e.currentTarget.value;
              setCard({ ...Card });
            }}
          >
            {WatermarkColors.map((color) => (
              <option key={color.name} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
        </div>
        <h5 className="margin-bottom padding input-description">
          Or choose them manually (left, right)
        </h5>
        <div className="input-grid margin-bottom">
          <input
            className="input"
            type="color"
            placeholder="Color"
            value="#000000"
            onChange={(e) => {
              Card.watermarkLeft = e.currentTarget.value;
              setCard({ ...Card });
            }}
          />
          <input
            className="input"
            type="color"
            placeholder="Color"
            value="#000000"
            onChange={(e) => {
              Card.watermarkRight = e.currentTarget.value;
              setCard({ ...Card });
            }}
          />
        </div>
        <h5 className="margin-bottom padding input-description">
          And enter an opacity
        </h5>
        <div className="input-grid margin-bottom">
          <input
            id="watermark-opacity"
            type="number"
            className="input"
            onChange={(e) => {
              Card.watermarkOpacity = parseInt(e.currentTarget.value, 10) / 100;
              setCard({ ...Card });
            }}
            defaultValue={40}
            step={1}
            min={0}
            max={100}
          />
        </div>
      </div>
      <div className="readable-background padding margin-bottom">
        <h5 className="margin-bottom padding input-description">
          Position the watermark (X, Y, Scale) or remove it
        </h5>
        <div className="input-grid margin-bottom">
          <input
            id="watermark-x"
            type="number"
            className="input"
            onChange={(e) => {
              Card.watermarkX = parseInt(e.currentTarget.value, 10);
              setCard({ ...Card });
            }}
            defaultValue={0}
          />
          <input
            id="watermark-y"
            type="number"
            className="input"
            onChange={(e) => {
              Card.watermarkY = parseInt(e.currentTarget.value, 10);
              setCard({ ...Card });
            }}
            defaultValue={0}
          />
          <input
            id="watermark-zoom"
            type="number"
            className="input"
            onChange={(e) => {
              Card.watermarkZoom = parseInt(e.currentTarget.value, 10);
              setCard({ ...Card });
            }}
            defaultValue={100}
            step={0.1}
            min={0}
          />
        </div>
        <div className="input-grid">
          <button
            className="input"
            type="button"
            onClick={() => resetWatermark(Card, setCard)}
          >
            Reset Watermark Position
          </button>
          <button
            className="input"
            type="button"
            onClick={() => {
              Card.watermark = imageBlank;
              setCard({ ...Card });
            }}
          >
            Remove Watermark
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuWatermark;
