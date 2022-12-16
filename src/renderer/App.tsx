// React
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Helpers
import { loadFrameSettings } from './js/helpers';

// App components
import CardCanvas from './components/CardCanvas';
import MenuTabs from './components/static/MenuTabs';
import TutorialVideo from './components/static/TutorialVideo';
import TemplatePackSelector from './components/TemplatePackSelector';
import TemplateGroupSelector from './components/TemplateGroupSelector';
import MenuText from './components/MenuText';
import MenuArt from './components/MenuArt';
import MenuSetSymbol from './components/MenuSetSymbol';
import MenuWatermark from './components/MenuWatermark';
import MenuCollectorInfo from './components/MenuCollectorInfo';
import MenuImport from './components/MenuImport';
import FramePicker from './components/FramePicker';
import FrameList from './components/FrameList';

// Types
import { TemplateGroup } from './types/TemplateGroup';
import { TemplatePack } from './types/TemplatePack';

// Data
import templateGroups from './data/TemplateGroups';
import groupStandard from './data/groups/groupStandard';
import packM15Regular from './data/packs/packM15Regular';
import { card } from './js/constants';

// Hooks
import useTemplatePack from './hooks/useTemplatePack';

// Style
import './App.css';
import backgroundImage from '../img/lowpolyBackground.svg';

const Creator = () => {
  // Core details
  const [Card, setCard] = useState(card);

  // Templates
  const [templateGroup, setTemplateGroup] =
    useState<TemplateGroup>(groupStandard);
  const [templatePack, setTemplatePack] =
    useState<TemplatePack>(packM15Regular);

  // Template hooks
  const { selectedFrame, selectedMask, setSelectedFrame, setSelectedMask } =
    useTemplatePack(templatePack);

  /* UTILITY FUNCTIONS
   * Component Style
   * */

  function toggleBackgroundColor(highlight: boolean) {
    Card.style = { backgroundColor: highlight ? '#ff007fff' : '#0000' };
    setCard({ ...Card });
  }

  return (
    <div
      className="creator-grid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: `cover`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        filter: 'none',
      }}
    >
      <CardCanvas Card={Card} />
      <div className="creator-menu box-shadow">
        <MenuTabs />
        <div id="creator-menu-sections" className="margin-bottom">
          <div id="creator-menu-frame">
            <div className="readable-background margin-bottom padding">
              <h5 className="margin-bottom padding input-description">
                Select a Frame Group and a Frame Pack, or type to search. Then
                you may Load the selected Frame Version (loading the frame
                version configures text placement, art size, etc...)
              </h5>
              <div className="input-grid margin-bottom">
                <TemplateGroupSelector
                  templateGroups={templateGroups}
                  callback={setTemplateGroup}
                />
                <TemplatePackSelector
                  group={templateGroup}
                  callback={setTemplatePack}
                />
                <div className="autocomplete">
                  <input
                    id="frameSearch"
                    // onChange={(e) => frameSearch(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Search Frames..."
                  />
                </div>
              </div>
              <div className="input-grid margin-bottom">
                <button
                  id="loadFrameVersion"
                  className="input"
                  type="button"
                  onClick={() => loadFrameSettings(Card, templatePack)}
                >
                  Load Frame Version
                </button>
              </div>
              <h5 className="input-description margin-bottom">
                Automatically load Frame Version when loading Frame Packs
              </h5>
              <label className="checkbox-container input">
                Auto load
                <input
                  id="autoLoadFrameVersion"
                  type="checkbox"
                  checked
                  onChange={() => {
                    Card.autoload = !Card.autoload;
                    setCard({ ...Card });
                  }}
                />
                <span className="checkmark" />
              </label>
            </div>
            <FramePicker
              pack={templatePack}
              selectedFrame={selectedFrame}
              selectedMask={selectedMask}
              setSelectedFrame={setSelectedFrame}
              setSelectedMask={setSelectedMask}
              Card={Card}
              setCard={setCard}
            />
            <div className="readable-background padding margin-bottom">
              <h5 className="margin-bottom padding input-description">
                Drag to reorder frame images
              </h5>
              <FrameList Card={Card} setCard={setCard} />
              <h5 className="padding input-description">
                You may also click to edit opacity, position, size, and more
              </h5>
            </div>
            <div className="readable-background padding margin-bottom">
              <h5 className="margin-bottom padding input-description">
                Upload custom frame images
              </h5>
              <div className="input-grid">
                <div className="padding drop-area">
                  <h5 className="margin-bottom padding input-description">
                    Drag and drop
                  </h5>
                  <input
                    type="file"
                    multiple
                    accept=".png, .svg, .jpg, .jpeg, .bmp"
                    placeholder="File Upload"
                    className="input"
                    onInput={(e) =>
                      uploadFiles(e.currentTarget.files, uploadFrameOption)
                    }
                    /* data-dropFunction="uploadFrameOption"
                    data-otherParams="" */
                  />
                </div>
                <div>
                  <input
                    type="url"
                    placeholder="Via URL"
                    className="input"
                    onChange={(e) =>
                      imageURL(e.target.value, uploadFrameOption)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="readable-background padding">
              <h5 className="input-description margin-bottom">
                Rounded Corners (Disable for printing service)
              </h5>
              <label className="checkbox-container input margin-bottom">
                Rounded Corners
                <input
                  id="rounded-corners"
                  defaultChecked
                  type="checkbox"
                  onChange={() => {
                    Card.noCorners = !Card.noCorners;
                    setCard({ ...Card });
                  }}
                />
                <span className="checkmark" />
              </label>
              <h5 className="input-description margin-bottom">
                Show guidelines for text, art, watermark, and set symbols
              </h5>
              <label className="checkbox-container input margin-bottom">
                Guidelines
                <input
                  id="show-guidelines"
                  type="checkbox"
                  onChange={() => {
                    Card.guidelines = !Card.guidelines;
                    setCard({ ...Card });
                  }}
                />
                <span className="checkmark" />
              </label>
              <h5 className="input-description margin-bottom">
                Highlight transparencies in card
              </h5>
              <label className="checkbox-container input">
                Transparencies
                <input
                  id="highlight-transparencies"
                  type="checkbox"
                  onChange={(e) =>
                    toggleBackgroundColor(e.currentTarget.checked)
                  }
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <MenuText />
          <MenuArt Card={Card} setCard={setCard} />
          <MenuSetSymbol Card={Card} setCard={setCard} />
          <MenuWatermark Card={Card} setCard={setCard} />
          <MenuCollectorInfo />
          <MenuImport />
          <TutorialVideo />
        </div>
        <div className="readable-background padding">
          <h3 className="download padding" onClick={() => downloadCard()}>
            Download your card
          </h3>
          <h5
            onClick={() => downloadCard(true)}
            id="downloadAlt"
            className="padding download input-description"
            style={{ textAlign: 'left' }}
          >
            Click here for an alternative download
          </h5>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Creator />} />
      </Routes>
    </Router>
  );
}
