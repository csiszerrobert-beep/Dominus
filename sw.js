const CACHE='dominus-v9-garantie-1';
const FILES=['./','./index.html','./verificari.html','./constatare.html','./reclamatie.html','./pompe_pif.html','./certificat_garantie.html','./certificat-pagina-1.jpg','./certificat-pagina-2.jpg','./manifest.webmanifest','./icon-192.png','./icon-512.png','./logo-dominus.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('dominus-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)))});
