import React from 'react';
import { toggleCollapse } from '../js/helpers';

const MenuImport = () => {
  return (
    <div id="creator-menu-import" className="hidden">
      <div className="readable-background margin-bottom padding">
        <h5 className="padding margin-bottom input-description">
          Import a real card by name
        </h5>
        <input
          id="import-name"
          className="input margin-bottom"
          type="text"
          placeholder="Enter Card Name"
          onChange={(e) => fetchScryfallData(e.currentTarget.value, importCard)}
        />
        <h5 className="padding margin-bottom input-description">
          Select a specific card to import
        </h5>
        <select
          className="input margin-bottom"
          id="import-index"
          onChange={() => changeCardIndex()}
        />
        <h5 className="padding input-description">
          Select a language for card imports (not all languages will always be
          available)
        </h5>
        <select
          className="input"
          id="import-language"
          onChange={() => {
            const importName = document.querySelector(
              '#import-name'
            ) as HTMLInputElement;
            fetchScryfallData(importName.value, importCard);
          }}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="ru">Russian</option>
          <option value="zhs">Simplified Chinese</option>
          <option value="zht">Traditional Chinese</option>
          <option value="ph">Phyrexian</option>
        </select>
      </div>
      <div className="readable-background margin-bottom padding">
        <h5 className="padding margin-bottom input-description">
          Save your current card
        </h5>
        <button
          className="input margin-bottom"
          type="button"
          onClick={() => saveCard()}
        >
          Save Card
        </button>
        <h5 className="padding margin-bottom input-description">
          Load a saved card
        </h5>
        <select
          id="load-card-options"
          className="input margin-bottom"
          onChange={(e) => loadCard(e.currentTarget.value)}
        />
        <h5 className="padding margin-bottom input-description">
          Delete selected card
        </h5>
        <button className="input" type="button" onClick={() => deleteCard()}>
          Delete Card
        </button>
      </div>
      <div className="readable-background padding margin-bottom">
        <h5 className="padding margin-bottom input-description">
          Download all saved cards
        </h5>
        <button
          className="input margin-bottom"
          type="button"
          onClick={() => downloadSavedCards()}
        >
          Download All
        </button>
        <h5 className="padding margin-bottom input-description">
          Upload previously downloaded file of saved cards (downloaded from
          above)
        </h5>
        <input
          type="file"
          accept=".cardconjurer,.txt"
          className="input margin-bottom"
          onInput={(e) => uploadSavedCards(e)}
        />
        <h5 className="padding margin-bottom input-description">
          Delete ALL saved cards
        </h5>
        <button
          className="input margin-bottom"
          type="button"
          onClick={() => deleteSavedCards()}
        >
          Delete All
        </button>
      </div>
      <div className="readable-background padding margin-bottom">
        <h5
          className="collapsible collapsed padding input-description"
          onClick={(e) => toggleCollapse(e)}
        >
          How are my cards saved?
        </h5>
        <div className="padding">
          <h5 className="margin-top">
            {`Cards are saved on your computer under your browser&apos;s
              localstorage, which usually has a limit of 5MB and cannot be
              changed.`}
          </h5>
          <h5 className="margin-top">
            {`Unfortunately, this means that if you save a lot of cards, you could
              run out of space.`}
          </h5>
          <h5 className="margin-top">
            {`Your localstorage runs out of space especially fast when you upload
              images directly from your computer, because the image itself has to
              be saved. However, if possible, uploading images via URL will save
              massive amounts of space, allowing you to save many more cards.`}
          </h5>
          <h5 className="margin-top">
            {`And if you do run out of space, don't worry! You can download
              all saved cards then delete all saved cards, freeing up all 5MB of
              space. And when you'd like to edit the cards you previously
              downloaded/deleted, you can re-upload them via the file upload
              (under "Upload downloaded cards").`}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MenuImport;
