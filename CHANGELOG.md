# Changelog

## [v0.4.0](https://github.com/atsjj/node-memwatch/compare/v0.2.2...v0.4.0) (2019-09-29)

### Merged

* [`#21`](https://github.com/atsjj/node-memwatch/pull/21) update license page
* [`#29`](https://github.com/atsjj/node-memwatch/pull/29) aver --&gt; after ?
* [`#16`](https://github.com/atsjj/node-memwatch/pull/16) chore(ci): add Node 4, 5 & 6
* [`#7`](https://github.com/atsjj/node-memwatch/pull/7) Update README.md
* [`#6`](https://github.com/atsjj/node-memwatch/pull/6) Use std::isnan and std::isinf when on linux.
* [`#5`](https://github.com/atsjj/node-memwatch/pull/5) include iojs-v3 in travis ci build
* [`#3`](https://github.com/atsjj/node-memwatch/pull/3) fix(bindings): support for npm@3 flatness
* [`#4`](https://github.com/atsjj/node-memwatch/pull/4) fix readme
* [`#2`](https://github.com/atsjj/node-memwatch/pull/2) Update module name in README
* [`#1`](https://github.com/atsjj/node-memwatch/pull/1) Link to the right git repository

### Commits

* [`ee16c2d`](https://github.com/atsjj/node-memwatch/commit/ee16c2d715fc20afb71d30e51e64a648135cabb7) update using nan and v0.11 support added
* [`165dcec`](https://github.com/atsjj/node-memwatch/commit/165dceccdf906a9beed1a06b93fbc13c589ea532) Upgraded NaN to 2.x.
* [`436ce0d`](https://github.com/atsjj/node-memwatch/commit/436ce0d0df8e744b2e669f0c09da979d1cc678d5) Updated dependencies, travis targets and bump version 0.3.0.
* [`aa177ed`](https://github.com/atsjj/node-memwatch/commit/aa177ed73de8997fd1877f4d6b2226d63ed156f2) Added NodeJS 12.x.x support
* [`64dd89e`](https://github.com/atsjj/node-memwatch/commit/64dd89e51f9a5e1c842fcdd886831986cf2a06a8) Fixed support for iojs/nodejs version &lt; 3.x with Nan 2.x.
* [`d1b66c4`](https://github.com/atsjj/node-memwatch/commit/d1b66c4459037c86e97252e54dd0b52ee5d7737e) Added iojs to Travis CI
* [`cb5fe9f`](https://github.com/atsjj/node-memwatch/commit/cb5fe9f0d91f0f5e125a4527b0a74bb0e959cc6a) Reworked gc() implementation.
* [`b4d6bb2`](https://github.com/atsjj/node-memwatch/commit/b4d6bb28b35da3c7c3b6a739071fd488f85204a0) Make compatible with Alpine linux by using cmath instead of math.h
* [`f05f77d`](https://github.com/atsjj/node-memwatch/commit/f05f77def4c08dd3cfcdfefd1a0cb63e3712b1a8) Fix travis ci build for nodejs 4+.
* [`1e06c8f`](https://github.com/atsjj/node-memwatch/commit/1e06c8fae82e2bbd87b4293b052a81de000d0b25) Added NodeJS 10.x.x support
* [`23b2da5`](https://github.com/atsjj/node-memwatch/commit/23b2da5b986b9f6db776e4a236437500a6ddbf68) Fix travis ci build for nodejs 4+.
* [`b7db604`](https://github.com/atsjj/node-memwatch/commit/b7db604e6a58b371037c1fdbcd848aba90be2494) Updated package.json file.
* [`c736f94`](https://github.com/atsjj/node-memwatch/commit/c736f948086cdb5c7a0f997552fe99c3f9ed7be5) Updated package.json file.
* [`4f768f5`](https://github.com/atsjj/node-memwatch/commit/4f768f50d65ff5a8fe714ec1528c4b7fae67cc94) fix unreferenced handlescope close
* [`b70ee74`](https://github.com/atsjj/node-memwatch/commit/b70ee74ab8bc7636a380274335bc2186cd80740e) Fixed nodegyp broken by path with spaces.
* [`d586015`](https://github.com/atsjj/node-memwatch/commit/d586015524f56b70571152ae1c1fc6b41401e2f8) Bump version 0.2.10
* [`3c624fd`](https://github.com/atsjj/node-memwatch/commit/3c624fdd55ff680b7edaa64c75f50256477da512) Bump version 0.2.9
* [`1dbb83d`](https://github.com/atsjj/node-memwatch/commit/1dbb83de08e53cbea8c1909918539144fa28e6f0) Bump version 0.2.8
* [`f88aa00`](https://github.com/atsjj/node-memwatch/commit/f88aa00ba19f9acb81c4647d22255cdbceb98f7f) Bump version 0.2.7
* [`661f35b`](https://github.com/atsjj/node-memwatch/commit/661f35b84c1e0d0a2b7e41c01f21d98dac2ba79e) Update package.json
* [`e816eca`](https://github.com/atsjj/node-memwatch/commit/e816eca001ccb6823e6ed78766a6ec0e5edc5ac5) Update package.json
* [`99614a3`](https://github.com/atsjj/node-memwatch/commit/99614a3ad49590fc3b85c89ab6df57db83fd3e72) Updated package.json file.
* [`708c3cf`](https://github.com/atsjj/node-memwatch/commit/708c3cf4d5b9b33b87f5c5b61167e5f57ca8f2bf) Fixed v8::IdleNotification for nodejs 0.12
* [`ce306b3`](https://github.com/atsjj/node-memwatch/commit/ce306b3aaefaf5eeeb420e6edcd16e791dd08159) Update package.json
* [`a9e1443`](https://github.com/atsjj/node-memwatch/commit/a9e1443f8908220d32796befeeff24cc5824e752) Fixed v8::IdleNotification for nodejs 0.12
* [`3bc27f8`](https://github.com/atsjj/node-memwatch/commit/3bc27f883f7d530c418247e88889b92da941caca) Fixed v8::IdleNotification for nodejs 0.12
## [v0.2.2](https://github.com/atsjj/node-memwatch/compare/v0.2.1...v0.2.2) (2013-03-13)

### Fixed

* throw an exception when a HeapDiff is allocated without the 'new' keyword - fixes #30 [`#30`](https://github.com/atsjj/memwatch-next/issues/30)

### Commits

* [`475ce02`](https://github.com/atsjj/node-memwatch/commit/475ce024a53c74ad5baff27003b81499896e81a5) document changes and bump version for 0.2.2
## [v0.2.1](https://github.com/atsjj/node-memwatch/compare/v0.2.0...v0.2.1) (2013-03-13)

### Merged

* [`#27`](https://github.com/atsjj/node-memwatch/pull/27) cast to uv_after_work_cb for Node 0.10

### Commits

* [`dd7bb3c`](https://github.com/atsjj/node-memwatch/commit/dd7bb3cef79ab376f7b3182da80d134853d04667) throw an exception if you call .end() twice on the same heapdiff
* [`a2547b4`](https://github.com/atsjj/node-memwatch/commit/a2547b444adb7abff2d093cd1bc7d26d137846dc) work around libuv crashing on windows with a null work function: issue joyent/libuv#629
* [`0dccb63`](https://github.com/atsjj/node-memwatch/commit/0dccb6382f638def3011927e3441f49797bc017c) free memory earlier, right in end(), rather than waiting for the garbage collector to take care of it.  These are large heap snapshots we're talking about
* [`c35562e`](https://github.com/atsjj/node-memwatch/commit/c35562eabf07e8fc2cbf3f14aad8495c38c0bc2d) ensure second heap snapshot (inside .end()) is assigned to the heapdiff object so that it may be cleaned up
* [`8c9f064`](https://github.com/atsjj/node-memwatch/commit/8c9f064645e4d2d50eaf64eb8efcaeb554bb6ebb) build successfully on Windows
* [`86baa70`](https://github.com/atsjj/node-memwatch/commit/86baa70d5c195d82abd2014ca9e84cbb8c597158) document and bump version for 0.2.1
* [`2f75595`](https://github.com/atsjj/node-memwatch/commit/2f755953258fe2556cc8f114d973699341bbded1) document changes in 0.2.0
* [`20d1b80`](https://github.com/atsjj/node-memwatch/commit/20d1b803c6838702fac28305f56f281b599ad924) version 0.2.0
* [`57c43bd`](https://github.com/atsjj/node-memwatch/commit/57c43bdfb91af7c824466291d5e9a355181b5eb5) add node 0.10 to travis
* [`079276a`](https://github.com/atsjj/node-memwatch/commit/079276a0208bc29641683d5f9716f23238b537f6) remove un-needed include of iostream, we shouldn't be printing here d00ds.
## [v0.2.0](https://github.com/atsjj/node-memwatch/compare/v0.1.5...v0.2.0) (2012-11-10)

### Fixed

* ensure second heap snapshot (inside .end()) is assigned to the heapdiff object so that it may be cleaned up.  closes #15 [`#15`](https://github.com/atsjj/memwatch-next/issues/15)

### Commits

* [`99d4af4`](https://github.com/atsjj/node-memwatch/commit/99d4af4336995a2f45bbb4e07bdf9d62183a9638) throw an exception if you call .end() twice on the same heapdiff
* [`45b14c9`](https://github.com/atsjj/node-memwatch/commit/45b14c9117c6e77808431b7bf4896b3ca100c61b) free memory earlier, right in end(), rather than waiting for the garbage collector to take care of it.  These are large heap snapshots we're talking about
* [`2e67026`](https://github.com/atsjj/node-memwatch/commit/2e67026b4afdb9ce5ede7a15f17adc281cc83a3e) document changes in 0.2.0
* [`a9b4b19`](https://github.com/atsjj/node-memwatch/commit/a9b4b19c4b05a27d138a071f5f4c2d5c5d770b8d) version bump and add a contributor
* [`9191db3`](https://github.com/atsjj/node-memwatch/commit/9191db333419442ac243260216f4d04cb80d1cc6) version 0.2.0
* [`a9c8496`](https://github.com/atsjj/node-memwatch/commit/a9c849668ef6a9dae582f30bba9dbbe2d6fac7ca) remove un-needed include of iostream, we shouldn't be printing here d00ds.
## [v0.1.5](https://github.com/atsjj/node-memwatch/compare/v0.1.4...v0.1.5) (2012-11-08)

### Commits

* [`6dfc319`](https://github.com/atsjj/node-memwatch/commit/6dfc3197a1037be1616b616a1c07af52eb8a8dc5) support for windows
* [`a584ba7`](https://github.com/atsjj/node-memwatch/commit/a584ba724fb9336d7a7be51ffabbea8375517c60) document changes in v0.1.5
* [`6e7f6c2`](https://github.com/atsjj/node-memwatch/commit/6e7f6c26578317bb8704689452c5bbaac4890cba) bump
## [v0.1.4](https://github.com/atsjj/node-memwatch/compare/v0.1.3...v0.1.4) (2012-07-07)

### Commits

* [`75c3a8d`](https://github.com/atsjj/node-memwatch/commit/75c3a8d2eefd31805c4027be4b8415f719158675) remove node-waf build files
* [`c037aff`](https://github.com/atsjj/node-memwatch/commit/c037aff1126ea5d260ba087a50c9b6c228630e4c) package.json formatting
* [`9d9b580`](https://github.com/atsjj/node-memwatch/commit/9d9b5803b8570730dc6f4ab571293f42bd15ea45) attempt to fix problem with OSX x64 build by using new node-gyp
* [`5303367`](https://github.com/atsjj/node-memwatch/commit/5303367da9a95e627a44bebc15892fb250f3d38b) fix compiler warnings
* [`3d73ee4`](https://github.com/atsjj/node-memwatch/commit/3d73ee4f8a2d1c626359252102b9b719517b8746) abuse gyp to build on node 0.8 with proper defines - issue #12
* [`4bbc797`](https://github.com/atsjj/node-memwatch/commit/4bbc7971a82c2f17794c99b445dcde4e7e5da616) fix build on mac
* [`c93ff3f`](https://github.com/atsjj/node-memwatch/commit/c93ff3f6186994604997126146000f8f88add17b) changes in v0.1.4
* [`20e3e61`](https://github.com/atsjj/node-memwatch/commit/20e3e617b58389ac6c7401bc1811b1b9697b4c21) don't use preinstall target for node-gyp configure step, node-gyp isn't yet installed
* [`716bfcc`](https://github.com/atsjj/node-memwatch/commit/716bfcc946b835a68d6fdb534483091df8c0980b) use the node-gyp 'rebuild' command
* [`3936f95`](https://github.com/atsjj/node-memwatch/commit/3936f9543f868eb1a3620325df031c8e28916017) more sed expression portability.  sigh.
* [`5fdfb77`](https://github.com/atsjj/node-memwatch/commit/5fdfb778ff45311265a91e987881cc1dc952f802) fixed target from bad copy
* [`ad2aca0`](https://github.com/atsjj/node-memwatch/commit/ad2aca0e2f18468dd0ba047c2e22cc813c898d7b) bump
## [v0.1.3](https://github.com/atsjj/node-memwatch/compare/v0.1.2...v0.1.3) (2012-07-05)

### Fixed

* support node 0.8 - closes #10 [`#10`](https://github.com/atsjj/memwatch-next/issues/10)

### Commits

* [`86a5215`](https://github.com/atsjj/node-memwatch/commit/86a5215e2479a707aa0e86bc3f695073fa4a114f) remove whitespace @ eol
* [`40fe997`](https://github.com/atsjj/node-memwatch/commit/40fe9974a4fd6b8578d504eba1e09298748167e8) changes in v0.1.3
* [`09d325a`](https://github.com/atsjj/node-memwatch/commit/09d325ae1eeee4521423800abbbb5eafff181721) bump
## [v0.1.2](https://github.com/atsjj/node-memwatch/compare/v0.1.1...v0.1.2) (2012-07-05)

### Merged

* [`#9`](https://github.com/atsjj/node-memwatch/pull/9) Added a readme

### Fixed

* add basic unit tests, closes #6 [`#6`](https://github.com/atsjj/memwatch-next/issues/6)
* proofread and wordsmith @jedp's excellent contributed README.  closes #3 [`#3`](https://github.com/atsjj/memwatch-next/issues/3)

### Commits

* [`7e2da99`](https://github.com/atsjj/node-memwatch/commit/7e2da99fbf094e74452fc41c36911359982bb444) added readme
* [`487f1da`](https://github.com/atsjj/node-memwatch/commit/487f1daec0ce246f9760de2246f539dc3fe40349) revert to reporting only full gc
* [`ee2cc31`](https://github.com/atsjj/node-memwatch/commit/ee2cc3171845fcf54b886200d162ec406e2aa199) emit on incremental as well as full; include type in data
* [`1e79cc3`](https://github.com/atsjj/node-memwatch/commit/1e79cc3113758050b536ddea978001eeef47099f) run unit tests on travis-ci
* [`7cfbdf0`](https://github.com/atsjj/node-memwatch/commit/7cfbdf07f91ec0262b5a8874d998fbb80119f1c7) README - further teensy refinements to the intro, issue #3
* [`ad16209`](https://github.com/atsjj/node-memwatch/commit/ad162093fd7e039c7b1e8875f895dfdb704696ef) add a license section to the readme
* [`36c3310`](https://github.com/atsjj/node-memwatch/commit/36c3310c7f43bc7f8f1d670cb33ae3b5edcf4b99) a final README tweak, swear.
* [`f9daed4`](https://github.com/atsjj/node-memwatch/commit/f9daed475c3ac941ce71c32e3e6f6eb4899f4417) changelog
* [`cb03446`](https://github.com/atsjj/node-memwatch/commit/cb03446030565eea8ea1dd5d23eaad07828f952f) use the .listeners function to determine whether listeners are present.  it does do a couple allocations, but I suspect is more robust to changes in event emitter implementation (this fixes .once())
* [`e4c1f24`](https://github.com/atsjj/node-memwatch/commit/e4c1f24bbf83f684431490c1df722bea7057bb7b) bump
## v0.1.1 (2012-06-30)

### Merged

* [`#8`](https://github.com/atsjj/node-memwatch/pull/8) Add timestamps to heapdiff data

### Fixed

* implement leak detection with a very basic initial algorithm. closes #2 [`#2`](https://github.com/atsjj/memwatch-next/issues/2)
* fix urls closes #1 [`#1`](https://github.com/atsjj/memwatch-next/issues/1)

### Commits

* [`c4f836f`](https://github.com/atsjj/node-memwatch/commit/c4f836f9f80109c92307acfd25cd3ea0131353e0) minor cleanup - explicitly ignore HeapDiff objects in reporting, reduce allocations
* [`d3a6975`](https://github.com/atsjj/node-memwatch/commit/d3a69751ff24865be8d1371d0300bec4bde96719) complete a first iteration of heapdiff
* [`b0f899d`](https://github.com/atsjj/node-memwatch/commit/b0f899d040590a9ddd07b39f6ef6f117cda34ebb) implement
* [`fbc7040`](https://github.com/atsjj/node-memwatch/commit/fbc70403a40fadb5106e2961be428c8a482a630c) stub out the heapdiff module
* [`b359e46`](https://github.com/atsjj/node-memwatch/commit/b359e46bd7ae8daed5742d0802a3fa4c3828a59c) another iteration on heapdiffing
* [`29d1aeb`](https://github.com/atsjj/node-memwatch/commit/29d1aeba0a95b9c47f561942e986b14ce5b8fc40) rename to memwatch
* [`f8c0234`](https://github.com/atsjj/node-memwatch/commit/f8c0234b7f2bad1ff2ba0b4f7a13b4ff5d033938) genesis
* [`fdd2bd4`](https://github.com/atsjj/node-memwatch/commit/fdd2bd4e420cfb6f9d9d2e013a8d5e3d8fb52e9d) rework statistics
* [`7f45f10`](https://github.com/atsjj/node-memwatch/commit/7f45f10e07ec3d1601ef1c504ccb3b1b906ac860) use libuv directly to move work out of the post-gc callback where v8.h is very clear that we're not supposed to allocate
* [`6e59723`](https://github.com/atsjj/node-memwatch/commit/6e59723675627372356e5a9c7fbbb22a9c29ad96) a slightly leaky example program that outputs both periodic sampling of heap size and postgc numbers so you can contrast the two
* [`b259830`](https://github.com/atsjj/node-memwatch/commit/b259830444e452da0a35a20b6b4e0249164bad85) test.js is no longer interesting.  kill him!
* [`f6d2762`](https://github.com/atsjj/node-memwatch/commit/f6d276252c3ed3791764722a5320946c91dde33f) implement an example that demonstrates that gcstats itself doesn't leak, add a function to trigger garbage collection
* [`20a8f7b`](https://github.com/atsjj/node-memwatch/commit/20a8f7bcd4e7fab777395fe30562eb0828dc05d5) meh
* [`014cf8d`](https://github.com/atsjj/node-memwatch/commit/014cf8d4083070fcc987feba40c429b26f987bbf) add timestamps to heapdiff
* [`2cbe0a1`](https://github.com/atsjj/node-memwatch/commit/2cbe0a1e8f0796fe1cfc6088c6b461c445d47a74) remove debug code
* [`f4baf39`](https://github.com/atsjj/node-memwatch/commit/f4baf39639b134373a236fea671513f167302c7d) bump
* [`d8f9c67`](https://github.com/atsjj/node-memwatch/commit/d8f9c6776f80c648168c57fbd956a992bd5b9bb4) missing include
