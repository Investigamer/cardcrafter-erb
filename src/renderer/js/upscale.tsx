/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint no-console: off */
import Upscaler from 'upscaler';
// @ts-ignore
import SlimX2 from '@upscalerjs/esrgan-slim/2x';
// @ts-ignore
import SlimX4 from '@upscalerjs/esrgan-slim/4x';
// @ts-ignore
import MediumX2 from '@upscalerjs/esrgan-medium/2x';
// @ts-ignore
import MediumX4 from '@upscalerjs/esrgan-medium/4x';

/**
 * The UpscalerJS package is still kinda buggy.
 * Has bad import inference, no type exports.
 */

export async function upscaleSlim(source: string, scale: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const models: { [key: number]: any } = {
    2: SlimX2,
    4: SlimX4,
  };
  const upscaler = new Upscaler({
    model: models[scale],
  });
  return upscaler
    .upscale(source, {
      output: 'base64',
    })
    .then((upscaledImage) => {
      return upscaledImage;
    })
    .catch((error) => {
      console.log(error);
      return source;
    });
}

export async function upscaleMedium(source: string, scale: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const models: { [key: number]: any } = {
    2: MediumX2,
    4: MediumX4,
  };
  const upscaler = new Upscaler({
    model: models[scale],
  });
  return upscaler
    .upscale(source, {
      output: 'base64',
    })
    .then((upscaledImage) => {
      return upscaledImage;
    })
    .catch((error) => {
      console.log(error);
      return source;
    });
}
