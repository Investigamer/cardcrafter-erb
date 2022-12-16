import React from 'react';

const MenuCollectorInfo = () => {
  return (
    <div id="creator-menu-bottomInfo" className="hidden">
      <div className="readable-background padding margin-bottom">
        <h5 className="padding margin-bottom input-description">
          Enter the card number, rarity, set code, language, and artist&apos;s
          name
        </h5>
        <div className="padding input-grid">
          <input
            id="info-number"
            type="text"
            className="input"
            onInput={() => bottomInfoEdited()}
            placeholder="Number"
            value=""
          />
          <input
            id="info-rarity"
            type="text"
            className="input"
            onInput={() => bottomInfoEdited()}
            placeholder="Rarity"
            value="P"
          />
          <input
            id="info-set"
            type="text"
            className="input"
            onInput={() => bottomInfoEdited()}
            placeholder="Set"
            value="MTG"
          />
          <input
            id="info-language"
            type="text"
            className="input"
            onInput={() => bottomInfoEdited()}
            placeholder="Language"
            value="EN"
          />
          <input
            id="info-artist"
            type="text"
            className="input"
            onInput={(e) => artistEdited(e.currentTarget.value)}
            placeholder="Artist"
          />
          <input
            id="info-year"
            type="number"
            className="input"
            onInput={() => bottomInfoEdited()}
            placeholder="0"
            value="1993"
          />
        </div>
      </div>
      <div className="readable-background padding margin-bottom">
        <h5 className="input-description margin-bottom">
          Enable importing collector information
        </h5>
        <label className="checkbox-container input margin-bottom">
          Enable imports
          <input
            id="enableImportCollectorInfo"
            type="checkbox"
            onChange={() => enableImportCollectorInfo()}
          />
          <span className="checkmark" />
        </label>
      </div>
      <div className="readable-background padding margin-bottom">
        <h5 className="input-description padding margin-bottom">
          Toggle between star (seen on foils) and dot (seen on regular cards)
        </h5>
        <div className="padding">
          <button
            className="input padding"
            type="button"
            onClick={() => toggleStarDot()}
          >
            Toggle Star/Dot
          </button>
        </div>
      </div>
      <div className="readable-background padding margin-bottom">
        <h5 className="input-description padding margin-bottom">
          Save current collector info as default
        </h5>
        <div className="padding">
          <button
            className="input padding"
            type="button"
            onClick={() => setDefaultCollector()}
          >
            Save as Default
          </button>
        </div>
        <h5 className="input-description padding margin-bottom">
          Clear your saved default collector info
        </h5>
        <div className="padding">
          <button
            className="input padding"
            type="button"
            onClick={() => removeDefaultCollector()}
          >
            Clear Saved Defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCollectorInfo;
