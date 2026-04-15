// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.bunny(),
    name: 'Atkinson Hyperlegible Next',
    cssVariable: '--font-atkinson'
  },{
    provider: fontProviders.bunny(),
    name: 'Cairo Play',
    cssVariable: '--font-cairo-play'
  }]
});
