import React from 'react';
import TextCodeReference from './static/TextCodeReference';

const MenuText = () => {
  return (
    <div id="creator-menu-text" className="hidden">
      <div className="readable-background padding margin-bottom">
        <h5 className="margin-bottom padding input-description">
          Select a text area to edit
        </h5>
        <div id="text-options" className="input-grid" />
      </div>
      <div className="readable-background padding margin-bottom">
        <h5 className="margin-bottom padding input-description">
          Enter card text
        </h5>
        <textarea
          id="text-editor"
          className="input margin-bottom"
          onInput={() => textEdited()}
        />
        <h5 className="margin-bottom padding input-description">
          Edit the placement and size of the selected textbox
        </h5>
        <button type="button" className="input" onClick={() => textboxEditor()}>
          Edit Bounds
        </button>
      </div>
      <TextCodeReference />
      <div className="readable-background padding">
        <h5 className="padding input-description">
          Add a textbox to your card
        </h5>
        <div className="padding input-grid">
          <button
            className="input"
            type="button"
            onClick={() => addTextbox('Nickname')}
          >
            Nickname
          </button>
          <button
            className="input"
            type="button"
            onClick={() => addTextbox('Power/Toughness')}
          >
            Power/Toughness
          </button>
          <button
            className="input"
            type="button"
            onClick={() => addTextbox('DateStamp')}
          >
            Date Stamp
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuText;
