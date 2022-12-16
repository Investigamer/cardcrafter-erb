import React from 'react';
import { toggleCreatorTabs } from '../../js/helpers';

const MenuTabs = () => {
  return (
    <div id="creator-menu-tabs" className="creator-menu-tabs">
      <h3
        className="selectable readable-background selected"
        onClick={(e) => toggleCreatorTabs(e, 'frame')}
      >
        Frame
      </h3>
      <h3
        className="selectable readable-background"
        onClick={(e) => toggleCreatorTabs(e, 'text')}
      >
        Text
      </h3>
      <h3
        className="selectable readable-background"
        onClick={(e) => toggleCreatorTabs(e, 'art')}
      >
        Art
      </h3>
      <h3
        className="selectable readable-background"
        onClick={(e) => toggleCreatorTabs(e, 'setSymbol')}
      >
        Set Symbol
      </h3>
      <h3
        className="selectable readable-background"
        onClick={(e) => toggleCreatorTabs(e, 'watermark')}
      >
        Watermark
      </h3>
      <h3
        className="selectable readable-background"
        onClick={(e) => toggleCreatorTabs(e, 'bottomInfo')}
      >
        Collector
      </h3>
      <h3
        className="selectable readable-background"
        onClick={(e) => toggleCreatorTabs(e, 'import')}
      >
        Import/Save
      </h3>
      <h3
        className="selectable readable-background"
        onClick={(e) => {
          toggleCreatorTabs(e, 'tutorial');
        }}
      >
        Tutorial
      </h3>
    </div>
  );
};

export default MenuTabs;
