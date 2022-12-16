import React from 'react';
import { toggleCollapse } from '../../js/helpers';

const TextCodeReference = () => {
  return (
    <div className="readable-background padding margin-bottom">
      <h5
        className="collapsible collapsed padding input-description"
        onClick={(e) => toggleCollapse(e)}
      >
        Text Code / Mana Symbol Code Reference
      </h5>
      <div className="padding">
        <h5 className="margin-top">Text Codes:</h5>
        <div className="text-codes margin-bottom padding">
          <h5>Code</h5>
          <h5>Result</h5>
          <h5>{'{cardname}'}</h5>
          <h5>Inserts the name of the card</h5>
          <h5>{'{-}'}</h5>
          <h5>Inserts an em-dash</h5>
          <h5>{'{i}'}</h5>
          <h5>Italicizes text</h5>
          <h5>{'{/i}'}</h5>
          <h5>Removes italicization</h5>
          <h5>{'{bold}'}</h5>
          <h5>Bolds text</h5>
          <h5>{'{/bold}'}</h5>
          <h5>Removes bold</h5>
          <h5>{'{lns}'}</h5>
          <h5>
            Moves to the next line without an extra space (stands for for
            line-no-space)
          </h5>
          <h5>{'{divider}'}</h5>
          <h5>Moves to the next line and draws the flavor text bar</h5>
          <h5>{'{flavor}'}</h5>
          <h5>
            Moves to the next line, draws the flavor text bar, and italicizes
          </h5>
          <h5>{'{fontsize#pt}'}</h5>
          <h5>Changes the font size to #pt (absolute)</h5>
          <h5>{'{fontsize#}'}</h5>
          <h5>
            Changes the font size by # pixels (use negative integers to shrink
            text, ex: {'{fontsize-12}'})
          </h5>
          <h5>{'{fontcolor___}'}</h5>
          <h5>Changes the font color to ___ ex: {'{fontcolor#00FF00}'}</h5>
          <h5>{'{left}'}</h5>
          <h5>Aligns text to the left</h5>
          <h5>{'{center}'}</h5>
          <h5>Aligns text to the center</h5>
          <h5>{'{right}'}</h5>
          <h5>Aligns text to the right</h5>
          <h5>{'{justify-left}'}</h5>
          <h5>Justifies text to the left</h5>
          <h5>{'{justify-center}'}</h5>
          <h5>Justifies text to the center</h5>
          <h5>{'{justify-right}'}</h5>
          <h5>Justifies text to the right</h5>
          <h5>{'{permashift#,$}'}</h5>
          <h5>
            Moves the text # pixels right and $ pixels down. Recommended for
            moving the text over large distances
          </h5>
          <h5>{'{up#}'}</h5>
          <h5>Moves the text # pixels up</h5>
          <h5>{'{down#}'}</h5>
          <h5>Moves the text # pixels down</h5>
          <h5>{'{left#}'}</h5>
          <h5>Moves the text # pixels left</h5>
          <h5>{'{right#}'}</h5>
          <h5>Moves the text # pixels right</h5>
          <h5>{'{shadow#}'}</h5>
          <h5>
            Changes the shadow distance to # (use {'{shadow0}'} to remove the
            shadow)
          </h5>
          <h5>{'{shadowcolor#}'}</h5>
          <h5>Changes the shadow color to #</h5>
          <h5>{'{indent}'}</h5>
          <h5>Indents the rest of the paragraph to the current point</h5>
          <h5>{'{/indent}'}</h5>
          <h5>Removes paragraph indendation</h5>
          <h5>{'{kerning#}'}</h5>
          <h5>Changes the kerning (letter spacing) to #</h5>
          <h5>{'{roll___}'}</h5>
          <h5>
            Used for dice-rolling cards (like from AFR) - whatever you fill in
            for ___ will be bolded, and alternating paragraphs will be shaded.
          </h5>
          <h5>Notes</h5>
          <h5>
            For colors, you may use HTML color codes (green), hex color codes
            (#00FF00), or rgb (ie rgb(0,255,0))
          </h5>
        </div>
        <h5>Mana Symbol Codes:</h5>
        <div className="text-codes padding">
          <h5>Code</h5>
          <h5>Result</h5>
          <h5>
            {'{1}'}, {'{2}'}... {'{20}'}
          </h5>
          <h5>Generic mana (works for numbers 1 through 20)</h5>
          <h5>
            {'{w}'}, {'{u}'}, {'{b}'}, {'{r}'}, {'{g}'}
          </h5>
          <h5>Colored mana</h5>
          <h5>
            {'{wu}'}, {'{wb}'}, {'{ub}'}... {'{2w}'}, {'{2u}'}...
          </h5>
          <h5>Hybrid mana</h5>
          <h5>
            {'{pw}'}, {'{pu}'}...
          </h5>
          <h5>Phyrexian mana</h5>
          <h5>
            {'{wup}'}, {'{wbp}'}, {'{ubp}'}...
          </h5>
          <h5>Hybrid phyrexian mana</h5>
          <h5>
            {'{t}'}, {'{untap}'}
          </h5>
          <h5>Respective tapping-related symbol</h5>
          <h5>
            {'{oldtap}'}, {'{originaltap}'}
          </h5>
          <h5>Old tap symbols</h5>
          <h5>
            {'{x}'}, {'{y}'}, {'{z}'}
          </h5>
          <h5>Respective variable-related symbol</h5>
          <h5>{'{c}'}</h5>
          <h5>Colorless-specific mana</h5>
          <h5>{'{s}'}</h5>
          <h5>Snow mana</h5>
          <h5>{'{e}'}</h5>
          <h5>Energy symbol</h5>
          <h5>{'{+1}'}</h5>
          <h5>+1 loyalty icon</h5>
          <h5>{'{planeswalker}'}</h5>
          <h5>Planeswalker icon</h5>
          <h5>{'{chaos}'}</h5>
          <h5>Chaos symbol (planechase)</h5>
          <h5>Notes</h5>
          <h5>Hybrid/Phyrexian mana only works with WUBRG</h5>
        </div>
      </div>
    </div>
  );
};

export default TextCodeReference;
