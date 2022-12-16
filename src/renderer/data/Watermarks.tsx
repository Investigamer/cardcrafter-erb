import React from 'react';

// Images
import Planeswalker from '../../img/watermarks/planeswalker.svg';
import DCIStar from '../../img/watermarks/misc-star.svg';
import DCILogo from '../../img/watermarks/misc-dci.svg';
import W from '../../img/watermarks/w.svg';
import U from '../../img/watermarks/u.svg';
import B from '../../img/watermarks/b.svg';
import R from '../../img/watermarks/r.svg';
import G from '../../img/watermarks/g.svg';
import P from '../../img/watermarks/purple.svg';
import Foretell from '../../img/watermarks/ability-foretell.svg';
import Phyrexian from '../../img/watermarks/phyrexian.svg';
import Mirran from '../../img/watermarks/mirran.svg';
import GuildAzorius from '../../img/watermarks/guild-azorius.svg';
import GuildDimir from '../../img/watermarks/guild-dimir.svg';
import GuildRakdos from '../../img/watermarks/guild-rakdos.svg';
import GuildGruul from '../../img/watermarks/guild-gruul.svg';
import GuildSelesnya from '../../img/watermarks/guild-selesnya.svg';
import GuildOrzhov from '../../img/watermarks/guild-orzhov.svg';
import GuildIzzet from '../../img/watermarks/guild-izzet.svg';
import GuildGolgari from '../../img/watermarks/guild-golgari.svg';
import GuildBoros from '../../img/watermarks/guild-boros.svg';
import GuildSimic from '../../img/watermarks/guild-simic.svg';
import SchoolSilverquill from '../../img/watermarks/school-silverquill.svg';
import SchoolPrismari from '../../img/watermarks/school-prismari.svg';
import SchoolWitherbloom from '../../img/watermarks/school-witherbloom.svg';
import SchoolLorehold from '../../img/watermarks/school-lorehold.svg';
import SchoolQuandrix from '../../img/watermarks/school-quandrix.svg';
import FamilyBrokers from '../../img/watermarks/family-brokers.svg';
import FamilyObscura from '../../img/watermarks/family-obscura.svg';
import FamilyMaestros from '../../img/watermarks/family-maestros.svg';
import FamilyRiveteers from '../../img/watermarks/family-riveteers.svg';
import FamilyCabaretti from '../../img/watermarks/family-cabaretti.svg';
import ClanAbzan from '../../img/watermarks/clan-abzan.svg';
import ClanJeskai from '../../img/watermarks/clan-jeskai.svg';
import ClanSultai from '../../img/watermarks/clan-sultai.svg';
import ClanMardu from '../../img/watermarks/clan-mardu.svg';
import ClanTemur from '../../img/watermarks/clan-temur.svg';
import ClanOjutai from '../../img/watermarks/clan-ojutai.svg';
import ClanSilumgar from '../../img/watermarks/clan-silumgar.svg';
import ClanKolaghan from '../../img/watermarks/clan-kolaghan.svg';
import ClanAtarka from '../../img/watermarks/clan-atarka.svg';
import ClanDromoka from '../../img/watermarks/clan-dromoka.svg';
import PolisAkros from '../../img/watermarks/polis-akros.svg';
import PolisMeletis from '../../img/watermarks/polis-meletis.svg';
import PolisSetessa from '../../img/watermarks/polis-setessa.svg';
import FactionWidget from '../../img/watermarks/faction-order-of-the-widget.svg';
import FactionAgents from '../../img/watermarks/faction-agents-of-sneak.svg';
import FactionDoom from '../../img/watermarks/faction-league-of-dastardly-doom.svg';
import FactionExplosioneers from '../../img/watermarks/faction-goblin-explosioneers.svg';
import FactionCrossbreed from '../../img/watermarks/faction-crossbreed-labs.svg';

interface Watermark {
  name: string;
  value: string | null;
}

const Watermarks: Watermark[] = [
  { value: 'none', name: 'None' },
  { value: null, name: 'General' },
  { value: Planeswalker, name: 'Planeswalker' },
  { value: DCIStar, name: 'DCI Star' },
  { value: DCILogo, name: 'DCI Logo' },
  { value: null, name: 'Monocolors' },
  { value: W, name: 'White' },
  { value: U, name: 'Blue' },
  { value: B, name: 'Black' },
  { value: R, name: 'Red' },
  { value: G, name: 'Green' },
  { value: null, name: 'Mechanics' },
  { value: Foretell, name: 'Foretell' },
  { value: null, name: 'Phyrexian/Mirrodin' },
  { value: Phyrexian, name: 'Phyrexian' },
  { value: Mirran, name: 'Mirran' },
  { value: null, name: 'Guilds (Ravnica)' },
  { value: GuildAzorius, name: 'Azorius' },
  { value: GuildDimir, name: 'Dimir' },
  { value: GuildRakdos, name: 'Rakdos' },
  { value: GuildGruul, name: 'Gruul' },
  { value: GuildSelesnya, name: 'Selesnya' },
  { value: GuildOrzhov, name: 'Orzhov' },
  { value: GuildIzzet, name: 'Izzet' },
  { value: GuildGolgari, name: 'Golgari' },
  { value: GuildBoros, name: 'Boros' },
  { value: GuildSimic, name: 'Simic' },
  { value: null, name: 'Schools (Strixhaven)' },
  { value: SchoolSilverquill, name: 'Silverquill' },
  { value: SchoolPrismari, name: 'Prismari' },
  { value: SchoolWitherbloom, name: 'Witherbloom' },
  { value: SchoolLorehold, name: 'Lorehold' },
  { value: SchoolQuandrix, name: 'Quandrix' },
  { value: null, name: 'Families (New Capenna)' },
  { value: FamilyBrokers, name: 'Brokers' },
  { value: FamilyObscura, name: 'Obscura' },
  { value: FamilyMaestros, name: 'Maestros' },
  { value: FamilyRiveteers, name: 'Riveteers' },
  { value: FamilyCabaretti, name: 'Cabaretti' },
  { value: null, name: 'Clans (Tarkir - Old Timeline)' },
  { value: ClanAbzan, name: 'Abzan' },
  { value: ClanJeskai, name: 'Jeskai' },
  { value: ClanSultai, name: 'Sultai' },
  { value: ClanMardu, name: 'Mardu' },
  { value: ClanTemur, name: 'Temur' },
  { value: null, name: 'Clans (Tarkir - New Timeline)' },
  { value: ClanOjutai, name: 'Ojutai' },
  { value: ClanSilumgar, name: 'Silumgar' },
  { value: ClanKolaghan, name: 'Kolaghan' },
  { value: ClanAtarka, name: 'Atarka' },
  { value: ClanDromoka, name: 'Dromoka' },
  { value: null, name: 'Poleis (Theros)' },
  { value: PolisAkros, name: 'Akros' },
  { value: PolisMeletis, name: 'Meletis' },
  { value: PolisSetessa, name: 'Setessa' },
  { value: null, name: 'Unstable Factions (Bablovia)' },
  {
    value: FactionWidget,
    name: 'Order of the Widget',
  },
  {
    value: FactionAgents,
    name: 'Agents of S.N.E.A.K.',
  },
  {
    value: FactionDoom,
    name: 'League of Dastardly Doom',
  },
  {
    value: FactionExplosioneers,
    name: 'Goblin Explosioneers',
  },
  {
    value: FactionCrossbreed,
    name: 'Crossbreed Labs',
  },
  { value: null, name: 'Custom' },
  { value: P, name: 'Purple Mana' },
];

export default Watermarks;
