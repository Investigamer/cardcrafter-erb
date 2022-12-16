import { TemplatePack } from './TemplatePack';

export type TemplateGroup = {
  packs: { name: string; pack: TemplatePack }[];
  callback?: () => null;
};
