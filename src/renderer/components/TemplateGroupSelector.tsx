import React from 'react';
import { TemplateGroup } from '../types/TemplateGroup';

type TemplateGroupDetails = {
  templateGroups: { name: string; group: null | TemplateGroup }[];
  callback: React.Dispatch<React.SetStateAction<TemplateGroup>>;
};

const TemplateGroupSelector = (props: TemplateGroupDetails) => {
  const { templateGroups, callback } = props;

  return (
    <select
      id="selectFrameGroup"
      className="input"
      onChange={(e) =>
        callback(templateGroups.find((o) => o.name === e.target.value)!.group!)
      }
    >
      {templateGroups!.map((group) =>
        group.group ? (
          <option key={group.name} value={group.name}>
            {group.name}
          </option>
        ) : (
          <option key={group.name} disabled>
            {group.name}
          </option>
        )
      )}
    </select>
  );
};

export default TemplateGroupSelector;
