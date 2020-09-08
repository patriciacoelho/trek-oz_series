importScripts("/trek-oz_series/precache-manifest.c14707d0cf7cceec3c7dfe3fcf964075.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
workbox.setConfig({debug: false});

const CACHE_NAME = 'v1::offline-html';
const ASSETS = [
  'img/offline.svg',
  'pages/offline.html'
];
const FALLBACK_HTML_URL = 'pages/offline.html';

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

workbox.navigationPreload.enable();

const networkOnly = new workbox.strategies.NetworkOnly();
const navigationHandler = async (params) => {
  try {
    return await networkOnly.handle(params);
  } catch (error) {
    return caches.match(FALLBACK_HTML_URL, {
      cacheName: CACHE_NAME,
    });
  }
};

workbox.routing.registerRoute(
  new workbox.routing.NavigationRoute(navigationHandler)
);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 40,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

workbox.routing.setDefaultHandler(networkOnly);

workbox.routing.setCatchHandler(({event}) => {
  const request = event.request;

  if (request.method !== 'GET') {
      return;
  }

  switch (request.destination) {
    case 'document':
      return caches.match(FALLBACK_HTML_URL);
    default:
      return Response.error();
  }
});

workbox.core.clientsClaim();
workbox.core.skipWaiting();

