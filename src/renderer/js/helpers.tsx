import React, { Dispatch, SetStateAction } from 'react';
import { CardDetails } from '../types/CardDetails';
import { TemplatePack } from '../types/TemplatePack';
import { imageBlank } from './constants';
import { setSymbolAliases } from '../data/SetSymbols';
import { upscaleSlim } from './upscale';
import { ScryfallCardData } from '../types/Scryfall';
import skip = util.skip;

/*
UTILITY FUNCTIONS
 */

// Trivial deep copy
export function deepcopy(obj: unknown) {
  return JSON.parse(JSON.stringify(obj));
}

// Get an Input Element
export function getInput(element: string) {
  return document.querySelector(element) as HTMLInputElement;
}

// Get a Select Input Element
export function getInputSelect(element: string) {
  return document.querySelector(element) as HTMLSelectElement;
}

// Card Data operations
export function loadFrameSettings(Card: CardDetails, pack: TemplatePack) {
  const checks: (keyof CardDetails & keyof TemplatePack)[] = [
    'artBounds',
    'setSymbolBounds',
    'watermarkBounds',
  ];
  checks.forEach((check) => {
    if (check in pack) {
      Card[check] = deepcopy(pack[check]);
    }
  });
  return Card;
}

// Scale functions
export function scaleX(input: number, card: CardDetails) {
  return Math.round((input + card.marginX) * card.width);
}
export function scaleWidth(input: number, card: CardDetails) {
  return Math.round(input * card.width);
}
export function scaleY(input: number, card: CardDetails) {
  return Math.round((input + card.marginY) * card.height);
}
export function scaleHeight(input: number, card: CardDetails) {
  return Math.round(input * card.height);
}

// Other nifty functions
function getElementIndex(element: { parentElement: { children: never } }) {
  return Array.prototype.indexOf.call(element.parentElement.children, element);
}

// Get file name for card
function getCardName(Card: CardDetails) {
  if ('title' in Card.text) {
    let imageName = Card.text.title.text || 'unnamed';
    if ('nickname' in Card.text) {
      imageName += ` (${Card.text.nickname.text})`;
    }
    return imageName.replace(/\{[^}]+\}/g, '');
  }
  return 'unnamed';
}

export function uploadFile(
  file: FileList | null,
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>,
  callback: (
    source: string,
    Card: CardDetails,
    setCard: Dispatch<SetStateAction<CardDetails>>
  ) => void
) {
  if (!file) return;
  let result: string | ArrayBuffer | null = imageBlank.src;
  const reader = new FileReader();
  reader.onloadend = () => {
    if (typeof reader.result === 'string') {
      callback(reader.result, Card, setCard);
    }
  };
  reader.onerror = () => {
    result = imageBlank.src;
  };
  reader.readAsDataURL(file[0]);
}

/* CREATOR UI
 * Functions Governing UI Selections
 * */

export function toggleCollapse(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.closest('.collapsible')!.classList.toggle('collapsed');
}

function selectSelectable(e: React.MouseEvent) {
  const eventTarget = e.currentTarget.closest('.selectable');
  if (eventTarget) {
    Array.from(eventTarget.parentElement!.children).forEach((element) =>
      element.classList.remove('selected')
    );
    eventTarget.classList.add('selected');
  }
}

export function toggleCreatorTabs(e: React.MouseEvent, target: string) {
  Array.from(
    document.querySelector('#creator-menu-sections')!.children
  ).forEach((element) => element.classList.add('hidden'));
  document.querySelector(`#creator-menu-${target}`)!.classList.remove('hidden');
  selectSelectable(e);
}

/*
 * IMAGE ALTERATIONS
 */

function croppedCanvas(oldCanvas: HTMLCanvasElement, sensitivity = 0) {
  const oldContext = oldCanvas.getContext('2d');
  const newCanvas = document.createElement('canvas');
  const newContext = newCanvas.getContext('2d');
  const pixels = oldContext!.getImageData(
    0,
    0,
    oldCanvas.width,
    oldCanvas.height
  ).data;
  const pixX = [];
  const pixY = [];
  for (let x = 0; x < oldCanvas.width; x += 1) {
    for (let y = 0; y < oldCanvas.height; y += 1) {
      if (pixels[(y * oldCanvas.width + x) * 4 + 3] > sensitivity) {
        pixX.push(x);
        pixY.push(y);
      }
    }
  }
  pixX.sort((a, b) => {
    return a - b;
  });
  pixY.sort((a, b) => {
    return a - b;
  });
  const n = pixX.length - 1;
  const newWidth = 1 + pixX[n] - pixX[0];
  const newHeight = 1 + pixY[n] - pixY[0];
  newCanvas.width = newWidth;
  newCanvas.height = newHeight;
  newContext!.putImageData(
    oldCanvas
      .getContext('2d')!
      .getImageData(pixX[0], pixY[0], newWidth, newHeight),
    0,
    0
  );
  return newCanvas;
}

function rgbToHSL(r: number, g: number, b: number) {
  /*
  Source: https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
  Provided the hsl => rgb conversion algorithms
  */

  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    h = 0;
    s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}
function hslToRGB(h: number, s: number, l: number) {
  let r: number;
  let g: number;
  let b: number;

  if (s === 0) {
    r = l;
    g = l;
    b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function hsl(
  canvas: HTMLCanvasElement,
  inputH: number,
  inputS: number,
  inputL: number
) {
  // adjust inputs
  const hue = inputH / 360;
  const saturation = inputS / 100;
  const lightness = inputL / 100;
  // create needed objects
  const context = canvas.getContext('2d');
  const imageData = context!.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;
  // for every pixel...
  for (let i = 0; i < pixels.length; i += 4) {
    // grab rgb
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];
    // convert to hsl
    let [h, s, l] = rgbToHSL(r, g, b);
    // make adjustments
    h! += hue;
    while (h > 1) {
      h -= 1;
    }
    s = Math.min(Math.max(s + saturation, 0), 1);
    l = Math.min(Math.max(l + lightness, 0), 1);
    // convert back to rgb
    [r, g, b] = hslToRGB(h, s, l);
    // and reassign
    pixels[i] = r;
    pixels[i + 1] = g;
    pixels[i + 2] = b;
  }
  // then put the new image data back
  context!.putImageData(imageData, 0, 0);
}

/*
WATERMARK Functionality
 */

export function resetWatermark(
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>
) {
  let watermarkZoom;
  if (
    Card.watermark.width / Card.watermark.height >
    scaleWidth(Card.watermarkBounds.width, Card) /
      scaleHeight(Card.watermarkBounds.height, Card)
  ) {
    watermarkZoom = (
      (scaleWidth(Card.watermarkBounds.width, Card) / Card.watermark.width) *
      100
    ).toFixed(1);
  } else {
    watermarkZoom = (
      (scaleHeight(Card.watermarkBounds.height, Card) / Card.watermark.height) *
      100
    ).toFixed(1);
  }

  // Watermark Zoom
  Card.watermarkZoom = parseFloat(watermarkZoom);
  getInput('#watermark-zoom').value = watermarkZoom;

  // Watermark X
  Card.watermarkX = Math.round(
    scaleX(Card.watermarkBounds.x, Card) -
      (Card.watermark.width * Card.watermarkZoom) / 200 -
      scaleWidth(Card.marginX, Card)
  );
  getInput('#watermark-x').value = Card.watermarkX.toString();

  // Watermark Y
  Card.watermarkY = Math.round(
    scaleY(Card.watermarkBounds.y, Card) -
      (Card.watermark.height * Card.watermarkZoom) / 200 -
      scaleHeight(Card.marginY, Card)
  );
  getInput('#watermark-y').value = Card.watermarkY.toString();
  setCard({ ...Card });
}

export function updateWatermark(
  source: string,
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>
) {
  const watermark: HTMLImageElement = new Image();
  watermark.crossOrigin = 'Anonymous';
  watermark.onerror = () => {
    if (watermark.src !== imageBlank.src) {
      watermark.src = imageBlank.src;
    }
  };
  watermark.onload = () => {
    // Insert new watermark and set values
    Card.watermarkSource = source;
    Card.watermark = watermark;
    resetWatermark(Card, setCard);
  };
  watermark.src = source;
}

export function getWatermark(
  source: string,
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>
) {
  // Set up the URL path
  let url: string;
  if (source.length < 5) {
    url = `https://cdn.jsdelivr.net/npm/keyrune/svg/${source}.svg`;
  } else url = source;

  // Request the URL
  const req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.overrideMimeType('image/svg+xml');
  req.onload = () => {
    if (
      req.readyState === 4 &&
      req.status === 200 &&
      req.responseXML !== null
    ) {
      const svg = document.body.appendChild(
        req.responseXML.documentElement as unknown as SVGGraphicsElement
      );
      const box = svg.getBBox();
      svg.setAttribute(
        'viewBox',
        [box.x, box.y, box.width, box.height].join(' ')
      );
      svg.setAttribute('width', box.width.toString());
      svg.setAttribute('height', box.height.toString());
      updateWatermark(
        `data:image/svg+xml,${encodeURIComponent(svg.outerHTML)}`,
        Card,
        setCard
      );
      svg.remove();
    }
  };
  req.send();
}

/*
SET SYMBOL FUNCTIONALITY
 */

export function removeSetSymbol(
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>
) {
  getInput('#set-symbol-code').value = '';
  getInput('#set-symbol-rarity').value = '';
  Card.setSymbol = imageBlank;
  setCard({ ...Card });
}

export function resetSetSymbol(
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>
) {
  // Guard against missing bounds
  if (!Card.setSymbolBounds) return;

  // Update inputs
  getInput('#setSymbol-x').value = Math.round(
    scaleX(Card.setSymbolBounds.x, Card)
  ).toString();
  getInput('#setSymbol-y').value = Math.round(
    scaleX(Card.setSymbolBounds.y, Card)
  ).toString();

  // Establish the Zoom
  let setSymbolZoom;
  if (
    Card.setSymbol.width / Card.setSymbol.height >
    scaleWidth(Card.setSymbolBounds.width, Card) /
      scaleHeight(Card.setSymbolBounds.height, Card)
  ) {
    setSymbolZoom = (
      (scaleWidth(Card.setSymbolBounds.width, Card) / Card.setSymbol.width) *
      100
    ).toFixed(1);
  } else {
    setSymbolZoom = (
      (scaleHeight(Card.setSymbolBounds.height, Card) / Card.setSymbol.height) *
      100
    ).toFixed(1);
  }
  getInput('#setSymbol-zoom').value = setSymbolZoom;

  // Horizontal center
  if (Card.setSymbolBounds.horizontal === 'center') {
    getInput('#setSymbol-x').value = Math.round(
      scaleX(Card.setSymbolBounds.x, Card) -
        (Card.setSymbol.width * parseFloat(setSymbolZoom)) / 100 / 2 -
        scaleWidth(Card.marginX, Card)
    ).toString();
  } else if (Card.setSymbolBounds.horizontal === 'right') {
    getInput('#setSymbol-x').value = Math.round(
      scaleX(Card.setSymbolBounds.x, Card) -
        (Card.setSymbol.width * parseFloat(setSymbolZoom)) / 100 -
        scaleWidth(Card.marginX, Card)
    ).toString();
  }
  if (Card.setSymbolBounds.vertical === 'center') {
    getInput('#setSymbol-y').value = Math.round(
      scaleY(Card.setSymbolBounds.y, Card) -
        (Card.setSymbol.height * parseFloat(setSymbolZoom)) / 100 / 2 -
        scaleHeight(Card.marginY, Card)
    ).toString();
  } else if (Card.setSymbolBounds.vertical === 'bottom') {
    getInput('#setSymbol-y').value = Math.round(
      scaleY(Card.setSymbolBounds.y, Card) -
        (Card.setSymbol.height * parseFloat(setSymbolZoom)) / 100 -
        scaleHeight(Card.marginY, Card)
    ).toString();
  }

  // Adjust actual X, Y, and Zoom -- then save Card object
  Card.setSymbolX = parseInt(getInput('#setSymbol-x').value, 10) / Card.width;
  Card.setSymbolY = parseInt(getInput('#setSymbol-y').value, 10) / Card.height;
  Card.setSymbolZoom = parseFloat(getInput('#setSymbol-zoom').value) / 100;
  setCard({ ...Card });
}

export function updateSetSymbol(
  source: string,
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>
) {
  const setSymbol: HTMLImageElement = new Image();
  setSymbol.crossOrigin = 'Anonymous';
  setSymbol.onerror = () => {
    if (setSymbol.src !== imageBlank.src) {
      setSymbol.src = imageBlank.src;
    }
  };
  setSymbol.onload = () => {
    // Insert new watermark and set values
    Card.setSymbolSource = source;
    Card.setSymbol = setSymbol;
    resetSetSymbol(Card, setCard);
  };
  setSymbol.src = source;
}

export async function getSetSymbol(
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>
) {
  // Format the string and check for known aliases
  let setCode = getInput('#set-symbol-code').value.toLowerCase() || 'cmd';
  if (setCode in setSymbolAliases) {
    setCode = setSymbolAliases[setCode];
  }

  // Lock the new symbol code
  if (getInput('#lockSetSymbolCode').checked) {
    localStorage.setItem('lockSetSymbolCode', setCode);
  }

  // Format rarity string
  const setRarity =
    getInput('#set-symbol-rarity')
      .value.toLowerCase()
      .replace('uncommon', 'u')
      .replace('common', 'c')
      .replace('rare', 'r')
      .replace('mythic', 'm') || 'c';

  // Check if we have a valid image available
  let source: string | null = await import(
    `../../img/setSymbols/official/${setCode}-${setRarity}.svg`
  )
    .then((img) => {
      return img.default;
    })
    .catch(() => {
      return null;
    });

  // Not an official code, try customs
  if (!source) {
    source = await import(
      `../../img/setSymbols/custom/${setCode}-${setRarity}.svg`
    )
      .then((img) => {
        return img.default;
      })
      .catch(() => {
        return null;
      });
  }

  // Update the symbol
  if (source) updateSetSymbol(source, Card, setCard);
  return null;
}

/*
 * ART FUNCTIONALITY
 * */

export function updateArtPosition(
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>> | null = null
) {
  Card.artX = getInput('#art-x').valueAsNumber || 0;
  Card.artY = getInput('#art-y').valueAsNumber || 0;
  Card.artZoom = getInput('#art-zoom').valueAsNumber || 0;
  Card.artRotate = getInput('#art-rotate').valueAsNumber || 0;
  if (setCard) setCard({ ...Card });
}

export function resetArt(
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>,
  reset = true
) {
  getInput('#art-rotate').value = '0';
  if (
    Card.art.width / Card.art.height >
    scaleWidth(Card.artBounds.width, Card) /
      scaleHeight(Card.artBounds.height, Card)
  ) {
    getInput('#art-zoom').value = (
      scaleHeight(Card.artBounds.height, Card) / Card.art.height
    ).toFixed(4);
    Card.artOffsetX =
      (Card.art.width * getInput('#art-zoom').valueAsNumber) / 2;
    Card.artOffsetY =
      (Card.art.width * getInput('#art-zoom').valueAsNumber) / 2;
    getInput('#art-y').value = (
      Math.round(
        scaleY(Card.artBounds.y, Card) - scaleHeight(Card.marginY, Card)
      ) + Card.artOffsetY
    ).toString();
    getInput('#art-x').value = (
      Math.round(
        scaleX(Card.artBounds.x, Card) -
          (getInput('#art-zoom').valueAsNumber * Card.art.width -
            scaleWidth(Card.artBounds.width, Card)) /
            2 -
          scaleWidth(Card.marginX, Card)
      ) + Card.artOffsetX
    ).toString();
  } else {
    getInput('#art-zoom').value = (
      scaleWidth(Card.artBounds.width, Card) / Card.art.width
    ).toFixed(4);
    Card.artOffsetX =
      (Card.art.width * getInput('#art-zoom').valueAsNumber) / 2;
    Card.artOffsetY =
      (Card.art.width * getInput('#art-zoom').valueAsNumber) / 2;
    getInput('#art-x').value = (
      Math.round(
        scaleX(Card.artBounds.x, Card) - scaleWidth(Card.marginX, Card)
      ) + Card.artOffsetX
    ).toString();
    getInput('#art-y').value = (
      Math.round(
        scaleY(Card.artBounds.y, Card) -
          (getInput('#art-zoom').valueAsNumber * Card.art.height -
            scaleHeight(Card.artBounds.height, Card)) /
            2 -
          scaleHeight(Card.marginY, Card)
      ) /
        Card.height +
      Card.artOffsetY
    ).toString();
  }

  // Update Card object
  if (reset) updateArtPosition(Card, setCard);
}

export async function updateArt(
  source: string,
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>
) {
  const art: HTMLImageElement = new Image();
  art.crossOrigin = 'Anonymous';
  art.onerror = () => {
    if (art.src !== imageBlank.src) {
      art.src = imageBlank.src;
    }
  };
  art.onload = async () => {
    // Upscaling step
    if (Card.artUpscale && art.src !== imageBlank.src) {
      // Upscale some shit
      art.onload = () => {
        Card.artSource = source;
        Card.art = art;
        resetArt(Card, setCard);
      };
      art.src = await upscaleSlim(art.src, 2);
    } else {
      // Update Card object
      Card.artSource = source;
      Card.art = art;
      resetArt(Card, setCard);
    }
  };
  art.src = source;
}

export function removeArt(
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>
) {
  getInput('#art-url').value = '';
  getInput('#art-file').value = '';
  Card.art = imageBlank;
  setCard({ ...Card });
}

/*
 * SCRYFALL FUNCTIONALITY
 */

export async function fetchScryfallData(
  cardName: string,
  searchUniqueArt = false,
  callback: (
    data: ScryfallCardData[],
    setter: Dispatch<SetStateAction<ScryfallCardData[]>>,
    tracker: number,
    trackerSetter: Dispatch<SetStateAction<number>>
  ) => void,
  setter: Dispatch<SetStateAction<ScryfallCardData[]>>,
  tracker: number,
  trackerSetter: Dispatch<SetStateAction<number>>
) {
  const cardLanguageSelect = getInputSelect('#import-language');
  const responseCards: ScryfallCardData[] = [];
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = async () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const importedCards = JSON.parse(xhttp.responseText).data;
      importedCards.forEach((card: ScryfallCardData) => {
        if ('card_faces' in card) {
          card.card_faces!.forEach((face) => {
            face.set = card.set;
            face.rarity = card.rarity;
            if (card.lang !== 'en') {
              face.oracle_text = face.printed_text!;
              face.name = face.printed_name!;
              face.type_line = face.printed_type_line!;
            }
            responseCards.push(face);
          });
        } else {
          if (card.lang !== 'en') {
            card.oracle_text = card.printed_text!;
            card.name = card.printed_name!;
            card.type_line = card.printed_type_line!;
          }
          responseCards.push(card);
        }
      });
      await callback(responseCards, setter, tracker, trackerSetter);
    } else if (
      xhttp.readyState === 4 &&
      xhttp.status === 404 &&
      !searchUniqueArt &&
      cardName !== ''
    ) {
      notify(
        `No cards found for "${cardName}" in ${
          cardLanguageSelect.options[cardLanguageSelect.selectedIndex].text
        }.`,
        5
      );
    }
  };
  xhttp.onerror = () => {
    notify(
      `No cards found for "${cardName}" in ${
        cardLanguageSelect.options[cardLanguageSelect.selectedIndex].text
      }.`,
      5
    );
  };
  const cardLanguage = `lang%3D${cardLanguageSelect.value}`;
  let uniqueArt = '';
  if (searchUniqueArt) {
    uniqueArt = '&unique=art';
  }
  xhttp.open(
    'GET',
    `https://api.scryfall.com/cards/search?order=released&include_extras=true${uniqueArt}&q=name%3D${cardName.replace(
      / /g,
      '_'
    )}%20${cardLanguage}`,
    true
  );
  try {
    xhttp.send();
  } catch {
    // eslint-disable-next-line no-console
    console.log('Scryfall API search failed.');
  }
}

export async function artFromScryfall(
  data: ScryfallCardData[],
  setter: Dispatch<SetStateAction<ScryfallCardData[]>>,
  tracker: number,
  trackerSetter: Dispatch<SetStateAction<number>>
) {
  const scryfallArt: ScryfallCardData[] = [];
  data.forEach((card) => {
    if (
      'image_uris' in card &&
      'art_crop' in card.image_uris! &&
      (card.object === 'card' || card.type_line !== 'Card') &&
      card.artist
    ) {
      card.source = card.image_uris.art_crop;
      scryfallArt.push(card);
    }
  });
  const now = Date.now();
  if (tracker < now) {
    trackerSetter(now);
    setter(scryfallArt);
  }
}

/*
 * DRAG AND DROP
 */

export function dropEnter(e: React.DragEvent<HTMLInputElement>) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.closest('.drop-area')!.classList.add('hover');
}
export function dropLeave(e: React.DragEvent<HTMLInputElement>) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.closest('.drop-area')!.classList.remove('hover');
}
export function dropOver(e: React.DragEvent<HTMLInputElement>) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.closest('.drop-area')!.classList.add('hover');
}
export function dropUpload(
  e: React.DragEvent<HTMLInputElement>,
  Card: CardDetails,
  setCard: Dispatch<SetStateAction<CardDetails>>,
  callback: (
    source: string,
    card: CardDetails,
    setter: React.Dispatch<React.SetStateAction<CardDetails>>
  ) => void
) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.files = e.dataTransfer.files;
  e.currentTarget.closest('.drop-area')!.classList.remove('hover');
  uploadFile(e.dataTransfer.files, Card, setCard, callback);
}
