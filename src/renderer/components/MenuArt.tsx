import React, { Dispatch, SetStateAction, useState } from 'react';
import { CardDetails } from '../types/CardDetails';
import {
  artFromScryfall,
  dropEnter,
  dropLeave,
  dropOver,
  dropUpload,
  fetchScryfallData,
  removeArt,
  resetArt,
  updateArt,
  updateArtPosition,
  uploadFile,
} from '../js/helpers';
import { corsProxy } from '../js/constants';
import { ScryfallCardData } from '../types/Scryfall';

interface MenuArtDetails {
  Card: CardDetails;
  setCard: Dispatch<SetStateAction<CardDetails>>;
}

const MenuArt = (props: MenuArtDetails) => {
  const { Card, setCard } = props;
  const [cardArts, setCardArts] = useState<ScryfallCardData[]>([]);
  const [artChanged, setArtChanged] = useState<number>(Date.now());
  return (
    <div id="creator-menu-art" className="hidden">
      <div className="readable-background padding margin-bottom">
        <h5 className="margin-bottom padding input-description">
          Choose/upload your art
        </h5>
        <div className="input-grid margin-bottom">
          <div className="padding drop-area">
            <h5 className="margin-bottom padding input-description">
              Drag and drop
            </h5>
            <input
              type="file"
              id="art-file"
              multiple={false}
              accept=".png, .svg, .jpg, .jpeg, .bmp"
              placeholder="File Upload"
              className="input"
              onDragEnter={dropEnter}
              onDragOver={dropOver}
              onDragLeave={dropLeave}
              onDrop={(e) => dropUpload(e, Card, setCard, updateArt)}
              onInput={(e) =>
                uploadFile(e.currentTarget.files, Card, setCard, updateArt)
              }
            />
          </div>
          <div>
            <input
              type="url"
              id="art-url"
              placeholder="Via URL"
              className="input"
              onChange={async (e) => {
                /* Validate URL, add CORS Proxy */
                const { value } = e.currentTarget;
                if (['http', 'https'].some((v) => value.includes(v))) {
                  await updateArt(`${corsProxy}${value}`, Card, setCard);
                }
              }}
            />
          </div>
        </div>
        <h5 className="margin-bottom padding input-description">
          Or enter a card name
        </h5>
        <input
          id="art-name"
          type="text"
          placeholder="Enter Card Name"
          className="input margin-bottom"
          onChange={async (e) => {
            await fetchScryfallData(
              e.currentTarget.value,
              true,
              artFromScryfall,
              setCardArts,
              artChanged,
              setArtChanged
            );
          }}
        />
        <h5 className="padding margin-bottom input-description">
          Select a specific card art to load
        </h5>
        <select className="input margin-bottom" id="art-index">
          {cardArts.map((art, index) => (
            <option
              key={index}
              onSelect={async () => {
                // Validate URL, add CORS Proxy
                if (['http', 'https'].some((v) => art.source!.includes(v))) {
                  await updateArt(`${corsProxy}${art.source}`, Card, setCard);
                }
              }}
            >
              {`${art.name} (${art.set} - ${art.artist})`}
            </option>
          ))}
        </select>
        <h5 className="margin-bottom padding input-description">
          And credit the artist
        </h5>
        <div className="input-grid">
          <input
            id="art-artist"
            type="text"
            className="input"
            onInput={(e) => artistEdited(e.currentTarget.value)}
            placeholder="Artist"
          />
        </div>
      </div>
      <div className="readable-background padding margin-bottom">
        <h5 className="margin-bottom padding input-description">
          Position the Art (X, Y, Scale, Rotation) or remove it
          <br />
          Click and drag anywhere on the card to move your art around. Hold
          shift while doing so to scale, or control to rotate.
        </h5>
        <div className="input-grid margin-bottom">
          <input
            id="art-x"
            type="number"
            className="input"
            defaultValue={0}
            onChange={() => updateArtPosition(Card, setCard)}
          />
          <input
            id="art-y"
            type="number"
            className="input"
            defaultValue={0}
            onChange={() => updateArtPosition(Card, setCard)}
          />
          <input
            id="art-zoom"
            type="number"
            className="input"
            defaultValue={1}
            onChange={() => updateArtPosition(Card, setCard)}
            min={0}
          />
          <input
            id="art-rotate"
            type="number"
            className="input"
            defaultValue={0}
            onChange={() => updateArtPosition(Card, setCard)}
            min={0}
            max={360}
          />
        </div>
        <div className="input-grid">
          <button
            className="input"
            type="button"
            onClick={() => resetArt(Card, setCard)}
          >
            Auto Fit Art
          </button>
          <button
            className="input"
            type="button"
            onClick={() => removeArt(Card, setCard)}
          >
            Remove Art
          </button>
        </div>
      </div>
      <div className="readable-background padding">
        <h5 className="input-description margin-bottom">
          Show guidelines for text, art, watermark, and set symbols
        </h5>
        <label className="checkbox-container input">
          Guidelines
          <input
            id="show-guidelines-2"
            type="checkbox"
            onChange={() => {
              Card.guidelinesArt = !Card.guidelinesArt;
              setCard({ ...Card });
            }}
          />
          <span className="checkmark" />
        </label>
        <h5 className="input-description margin-bottom">
          Upscale the Art (Experimental)
        </h5>
        <label className="checkbox-container input">
          Upscale
          <input
            id="show-guidelines-2"
            type="checkbox"
            onChange={() => {
              // Upscale the art
            }}
          />
          <span className="checkmark" />
        </label>
      </div>
    </div>
  );
};

export default MenuArt;
