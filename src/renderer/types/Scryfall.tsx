export interface ScryfallImageURIS {
  small?: string;
  normal?: string;
  large?: string;
  png?: string;
  art_crop?: string;
  border_crop?: string;
}

export interface ScryfallSearchData {
  object: string;
  total_cards: number;
  has_more: boolean;
  data: ScryfallCardData[];
}

export interface ScryfallCardData {
  artist: string;
  name: string;
  set: string;
  object: string;
  type_line: string;
  rarity: string;
  lang: string;
  oracle_text: string;
  printed_text?: string;
  printed_name?: string;
  printed_type_line?: string;
  source?: string;
  card_faces?: ScryfallCardData[];
  image_uris?: ScryfallImageURIS;
}
