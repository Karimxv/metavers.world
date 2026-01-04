self.addEventListener('install', event => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', event => {
  // حاليا نمرر كل الطلبات كما هي
});
