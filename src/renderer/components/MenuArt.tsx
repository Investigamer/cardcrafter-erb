import React, { Dispatch, SetStateAction } from 'react';
import { set } from 'husky';
import { imageBlank } from '../js/constants';
import { CardDetails } from '../types/CardDetails';
import { updateArt, uploadFile } from '../js/helpers';

interface MenuArtDetails {
  Card: CardDetails;
  setCard: Dispatch<SetStateAction<CardDetails>>;
}

const MenuArt = (props: MenuArtDetails) => {
  const { Card, setCard } = props;
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
              multiple={false}
              accept=".png, .svg, .jpg, .jpeg, .bmp"
              placeholder="File Upload"
              className="input"
              /* data-dropFunction="uploadArt" */
              /* data-otherParams="autoFit" */
              onInput={(e) =>
                uploadFile(e.currentTarget.files, Card, setCard, updateArt)
              }
            />
          </div>
          <div>
            <input
              type="url"
              placeholder="Via URL"
              className="input"
              onChange={(e) =>
                imageURL(e.currentTarget.value, uploadArt, 'autoFit')
              }
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
          onChange={(e) =>
            fetchScryfallData(e.currentTarget.value, artFromScryfall, true)
          }
        />
        <h5 className="padding margin-bottom input-description">
          Select a specific card art to load
        </h5>
        <select
          className="input margin-bottom"
          id="art-index"
          onChange={() => changeArtIndex()}
        />
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
            onChange={(e) => {
              const value = parseInt(e.currentTarget.value, 10) || 0;
              Card.artX = value / Card.width;
              setCard({ ...Card });
            }}
          />
          <input
            id="art-y"
            type="number"
            className="input"
            defaultValue={0}
            onChange={(e) => {
              const value = parseInt(e.currentTarget.value, 10) || 0;
              Card.artY = value / Card.height;
              setCard({ ...Card });
            }}
          />
          <input
            id="art-zoom"
            type="number"
            className="input"
            defaultValue={100}
            onChange={(e) => {
              const value = parseFloat(e.currentTarget.value) || 0;
              Card.artZoom = value / 100;
              setCard({ ...Card });
            }}
            step={0.1}
            min={0}
          />
          <input
            id="art-rotate"
            type="number"
            className="input"
            defaultValue={0}
            onChange={(e) => {
              Card.artRotate = parseInt(e.currentTarget.value, 10) || 0;
              setCard({ ...Card });
            }}
            step={1}
            min={0}
            max={360}
          />
        </div>
        <div className="input-grid">
          <button className="input" type="button" onClick={() => autoFitArt()}>
            Auto Fit Art
          </button>
          <button
            className="input"
            type="button"
            onClick={() => uploadArt(imageBlank.src)}
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
