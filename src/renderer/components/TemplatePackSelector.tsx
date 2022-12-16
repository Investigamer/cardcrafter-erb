import React from 'react';
import { TemplatePack } from '../types/TemplatePack';
import { TemplateGroup } from '../types/TemplateGroup';

type TemplatePackDetails = {
  group: TemplateGroup;
  callback: React.Dispatch<React.SetStateAction<TemplatePack>>;
};

const TemplatePackSelector = (props: TemplatePackDetails) => {
  const { group, callback } = props;

  return (
    <select id="selectFramePack" className="input">
      {group.packs.map((pack) =>
        pack.pack ? (
          <option key={pack.name} onSelect={() => callback(pack.pack)}>
            {pack.name}
          </option>
        ) : (
          <option key={pack.name} disabled>
            {pack.name}
          </option>
        )
      )}
    </select>
  );
};

export default TemplatePackSelector;
