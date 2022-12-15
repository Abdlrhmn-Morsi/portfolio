'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "24ff73b6a3418345812bc0ebccecaa66",
".git/config": "b913d9b28889e787c5552e92a773c5c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ab3e7582f22585a3694e4d00958f2143",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "956ddc989d22ee1128dd182fcadadd9e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a494e41d7a7ddc7a92baa96209173bb8",
".git/logs/refs/heads/main": "4e8866056c49ac76be54aaa406ff16b8",
".git/logs/refs/remotes/origin/main": "ad031a148a9e68d60c85d8d02fd516b7",
".git/objects/11/57b15d1fb6e7b2af3a04b2995d448b97617810": "810352dfc28880c7ce984061ebb242a9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1f/8f7eb658ad3653009610141ba4615ea984f07a": "82ee15c139405090b78c5a37021d7e1c",
".git/objects/25/3b72ce91815fdd1d559c68c67db72cd4083a16": "78db54e17c59555ff50782d55a272634",
".git/objects/26/879e534df407719f667d9c2cb6e0a666175b5f": "08558464b88c50d8e4b762db9993944f",
".git/objects/27/d03fd47ab2ec88b6833e3238c510fa457f2c58": "46f0c24c95c78429196dcb4ad2d12aa8",
".git/objects/2a/29f23030e62a3e9b70c30c94ebbd8ae45ba410": "6662e50e816b3803ef008d1f252967e6",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/c2906c01a2b1eca6eee0faaab153caa22f8efb": "9b3acce6bc8e1b7429763d74332c49f6",
".git/objects/39/1f2f35797859a41642045f2870aecc4f74e614": "6ea07f15227d0810c064fb81b388cdb9",
".git/objects/3e/a6abb31a64b186fcbc54060e8d8384b9e3dc8f": "5709c7d9caf2b89e7c081dae18c89a69",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/db9ba9a5b619069de8953ec90fdd064d185192": "d680609e5923acd15f73118ca4df6714",
".git/objects/44/229684d873e31205c7da6e70f822d3282f3425": "2a98e2b0cedebb66829203bc6ab3e73f",
".git/objects/45/631b8ae4b9dd895e80b30207b095b748a1433a": "bc4f3cf231d74bd28216434f3b90a4b6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/cec0687c9fbb97b23a0f2d18a1452e40d99365": "38db5a8ac3b72b3b190fba02d7ecd003",
".git/objects/55/a039814e348ceb2c5a3eeb1a2ee232cf8aad74": "a318f97440f15b77b0514f2b40fb67fc",
".git/objects/60/90e6142379fc3ce8aa1755c0008e4f1e320171": "6ed2a37284f37d344e40550b8d794aa1",
".git/objects/62/8f0d4cd90d595731fffd77157dcded459d959b": "4ab018ab628eb7dd77a66a6d196ebb7b",
".git/objects/78/6051fd9ba0c9142351500e047a7633006e1448": "36b35a4c3010a3c414e25fe0ed431c52",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/2bc881c0eabe3f8009f47855338504c62a092a": "d7cccb64a10cd089e0dcd3f847eca92d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/b9fdaf2c811dbdbd3f8ffa7e5686a64bf68b8a": "be43eccb6f388242a735edf9b5fc936a",
".git/objects/84/b82038500bbc13470c702ba1faa9ef22cb353f": "91692b81377056ab7df1e52729a929d3",
".git/objects/88/a0025253e016d9f29d011ef969d75de9126c1a": "aa7e438d7e9cb51ff47e5ab2982ce4db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b88acc9ef245c9ab16e366f32584ac2b58210d": "9622d92e0e0cdca96c60b70b299089a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/c8da0a1a6385b45389f2feb8e83a493d7978d7": "6657851ce09997f2ae2cdb6aeb15410d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/c8d0d2da4c65f282900feb244c14e04a99fe81": "f332c29018f5274f0ac3797aa4553f8b",
".git/objects/9f/5452c96bb6333a6c2cf9db6975514a3625cbe4": "b6a88454d8886ad60a6b34389a85442a",
".git/objects/9f/6010460daca57fb8a2ee47e27374fbb622e382": "d1372cb97449c10cf5e2d94153f320c2",
".git/objects/a0/e8fa9b8aa62835574795b18d97a97249564723": "4eb03d8c00c861b15ba943f7426090b9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/429b1cc6acdfeede08bcf1a9823cf5a5acb9fd": "8b06d52e116de6d98c710b2bc6e543f6",
".git/objects/ae/6f346a190f6b67a99dd260cfe9f7fd664fbc96": "f61ce2d835f779ba4c4d98c9e76f30f1",
".git/objects/af/27b30f9ee069b098267e76d9babf34bd230ad7": "d92c1f2d27ac81afcb912268b5cf0307",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b5/70df908e9319931abb7e7f0b9fba8f081936d6": "be0a865f7987b3a7b0f152b033d79c81",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/9950d0647ba051af31f65481131ab2dfd050f8": "b876e644c38f484da455b9d2a839edfc",
".git/objects/be/76e45c5f8abb2d4821e99a67fd391b406b6026": "1adf5861918628c3901bba8dadea7e16",
".git/objects/cc/277948fa5bbf586a0aabd7f05c67b516a8544e": "6e39ebc3ec775fb569ebefd59ab8baba",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/23b055b9694ae81854cf0418ff04af73bb0fef": "aa4b9832503f349a59f6141507aacc9c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/508e5ae3587ba72e5da3569f6d49a27ae9486b": "affb9d8421450191f525590315fee327",
".git/objects/dc/2976abdbd3bb8b0b6cc3a91e6c142b076f6232": "87db282d4c0b8ce6e1648a5d7104365f",
".git/objects/dd/83682cc41ced4245b3fade2243a49147fa74f5": "2bdcd036cb1d38365789b530054dae19",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/49efa1a3721a45e4b03d7e482bb4cf72b56a7c": "33bf855ac90bafd7acf5fd74e699e17e",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/5ec7d401ecc4d812de8abc014c861b13e60467": "4eefc111fe2e22fdd1c396bf91c5738e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/5021ab6ba6294a2dcd42ae4c8f352335a8f09c": "159550a74bec4156daa6e9b6994a7b82",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/6d220b8f862bfc539c49ff6410214026c1fb34": "b4b646d23155699ba14c0fc03693155c",
".git/objects/fd/2dd617112711d911e6114563df17853bbf9b31": "4ad09532c9c6451b1420eeff98c98cf0",
".git/ORIG_HEAD": "c70d93856a2017a78fd7f117e452f14d",
".git/refs/heads/main": "c70d93856a2017a78fd7f117e452f14d",
".git/refs/remotes/origin/main": "c70d93856a2017a78fd7f117e452f14d",
"assets/AssetManifest.json": "be4e148ab12fc1e9616f4bc798cb7503",
"assets/assets/images/blackless_app.png": "8cbba7ebae079dcb112e71309b10f3eb",
"assets/assets/images/bold_burger_app.png": "40a88cfc52975b952bce75af8c4104cc",
"assets/assets/images/french_flow_app.png": "5cbbcc15c52cab615de3b340cd4cf47a",
"assets/assets/images/f_blackless_app.png": "6dcb1e7e8dff435214a0cf3aafacfdf4",
"assets/assets/images/f_bold_burger_app.png": "4fd39169ef39198e871bbe0fa3329bb8",
"assets/assets/images/f_french_flow_app.png": "4946a6b1471087b5de785b0332a0530f",
"assets/assets/images/f_owlwo_app.png": "ba91edd7b517ce98ad242adf5ca130c7",
"assets/assets/images/f_soccer_news_app.png": "ea5e199b1690bc40875a0d2fd6181176",
"assets/assets/images/f_xo.png": "e553330ee2350958a95f55ef5c32711c",
"assets/assets/images/github.png": "dcf16ddd7921830ac42ade17aca0679b",
"assets/assets/images/owlwo_app.png": "2dca5d70b0e4f837c0bae3697fcfcfa7",
"assets/assets/images/personal_logo.png": "6727b6354dfc71afdc24f20a10a792e3",
"assets/assets/images/profile_img.png": "1ac298527bd94a8532c1551d3bff5f02",
"assets/assets/images/share.png": "a2f87dab38afd6dec55c37bc453d8174",
"assets/assets/images/soccer_news_app.png": "ff5436a8aaa47223f4d2667a60fb5d5e",
"assets/assets/images/xo.png": "ba7341e2b20bed8bf19c32f61e7d0f25",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1a11f9cad287ca14ca7774436c7ac376",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "37593cae59cfc51a6ff65e3203f54a16",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/portfolio_logo2.png": "9dbcec191b34c536177efe6eab4617a3",
"index.html": "a9dfff59f55a3f2be37f92c77a990551",
"/": "a9dfff59f55a3f2be37f92c77a990551",
"main.dart.js": "293292e6d5b4ca405b619a908f46641f",
"manifest.json": "d6ca57350173b3ccd7074f958253fbee",
"portfolio_logo.png": "9dbcec191b34c536177efe6eab4617a3",
"version.json": "c8f979d408e51acd1ee06f6af9b9722c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
