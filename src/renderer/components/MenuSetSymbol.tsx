import React, { Dispatch, SetStateAction } from 'react';
import {
  toggleCollapse,
  getSetSymbol,
  resetSetSymbol,
  removeSetSymbol,
  updateSetSymbol,
  uploadFile,
} from '../js/helpers';
import { CardDetails } from '../types/CardDetails';
import { corsProxy } from '../js/constants';

interface MenuSetSymbolDetails {
  Card: CardDetails;
  setCard: Dispatch<SetStateAction<CardDetails>>;
}

const MenuSetSymbol = (props: MenuSetSymbolDetails) => {
  const { Card, setCard } = props;
  return (
    <div id="creator-menu-setSymbol" className="hidden">
      <div className="readable-background padding margin-bottom">
        <h5 className="margin-bottom padding input-description">
          Choose/upload your set symbol
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
              /* data-dropFunction="uploadSetSymbol" */
              /* data-otherParams="resetSetSymbol" */
              onInput={(e) =>
                uploadFile(
                  e.currentTarget.files,
                  Card,
                  setCard,
                  updateSetSymbol
                )
              }
            />
          </div>
          <div>
            <input
              type="url"
              placeholder="Via URL"
              className="input"
              onChange={(e) => {
                /* Validate URL, add CORS Proxy */
                const { value } = e.currentTarget;
                if (['http', 'https'].some((v) => value.includes(v))) {
                  updateSetSymbol(`${corsProxy}${value}`, Card, setCard);
                }
              }}
            />
          </div>
        </div>
        <h5 className="margin-bottom padding input-description">
          Or enter a set code/rarity
        </h5>
        <div className="input-grid margin-bottom">
          <input
            id="set-symbol-code"
            type="text"
            placeholder="Set Code"
            className="input"
            onChange={() => getSetSymbol(Card, setCard)}
          />
          <input
            id="set-symbol-rarity"
            type="text"
            placeholder="Rarity"
            className="input"
            defaultValue="c"
            onChange={() => getSetSymbol(Card, setCard)}
          />
        </div>
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
          Position the Set Symbol (X, Y, Scale) or remove it
        </h5>
        <div className="input-grid margin-bottom">
          <input
            id="setSymbol-x"
            type="number"
            className="input"
            onInput={(e) => {
              let value = parseInt(e.currentTarget.value, 10);
              if (!value) value = 0;
              Card.setSymbolX = value / Card.width;
              setCard({ ...Card });
            }}
            defaultValue={0}
          />
          <input
            id="setSymbol-y"
            type="number"
            className="input"
            onInput={(e) => {
              let value = parseInt(e.currentTarget.value, 10);
              if (!value) value = 0;
              Card.setSymbolY = value / Card.height;
              setCard({ ...Card });
            }}
            defaultValue={0}
          />
          <input
            id="setSymbol-zoom"
            type="number"
            className="input"
            onInput={(e) => {
              let value = parseFloat(e.currentTarget.value);
              if (!value) value = 0;
              Card.setSymbolZoom = value / 100;
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
            onClick={() => resetSetSymbol(Card, setCard)}
          >
            Reset Set Symbol
          </button>
          <button
            className="input"
            type="button"
            onClick={() => removeSetSymbol(Card, setCard)}
          >
            Remove Set Symbol
          </button>
        </div>
      </div>
      <div className="readable-background padding">
        <h5 className="input-description margin-bottom">
          Lock the set symbol code (saves between reloads)
        </h5>
        <label className="checkbox-container input margin-bottom">
          Lock set symbol code
          <input
            id="lockSetSymbolCode"
            type="checkbox"
            onChange={() => lockSetSymbolCode()}
          />
          <span className="checkmark" />
        </label>
        <h5 className="input-description margin-bottom">
          Lock the set symbol URL (saves between reloads)
        </h5>
        <label className="checkbox-container input">
          Lock set symbol URL
          <input
            id="lockSetSymbolURL"
            type="checkbox"
            onChange={() => lockSetSymbolURL()}
          />
          <span className="checkmark" />
        </label>
      </div>
    </div>
  );
};

export default MenuSetSymbol;
