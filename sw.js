importScripts('/vendorlib/workbox/workbox-v6.5.3/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: '/vendorlib/workbox/workbox-v6.5.3/',
});

const {pageCache} = workbox.recipes;
const {imageCache} = workbox.recipes;
const {staticResourceCache} = workbox.recipes;
const {googleFontsCache} = workbox.recipes;
const {offlineFallback} = workbox.recipes;

pageCache();

googleFontsCache();

staticResourceCache();

imageCache();

offlineFallback();
