# Memwatch

[![Latest npm release][npm-badge]][npm-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]

[npm-badge]: https://img.shields.io/npm/v/@atsjj/node-memwatch.svg
[npm-badge-url]: https://www.npmjs.com/package/@atsjj/node-memwatch
[travis-badge]: https://img.shields.io/travis/com/atsjj/node-memwatch/master.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.com/atsjj/node-memwatch
[license-url]: http://wtfpl.net
[memwatch-next-url]: https://github.com/marcominetti/node-memwatch

Leak Detection and Heap Diffing for Node.JS. This is a fork of [memwatch-next][memwatch-next-url]
that adds support for newer versions of Node.

`memwatch` is here to help you detect and find memory leaks in
Node.JS code.  It provides:

* A `leak` event, emitted when it appears your code is leaking memory.

* A `stats` event, emitted occasionally, giving you
  data describing your heap usage and trends over time.

* A `HeapDiff` class that lets you compare the state of your heap between
  two points in time, telling you what has been allocated, and what
  has been released.

## Installation

```
npm install --save @atsjj/memwatch
```

## Description

There are a growing number of tools for debugging and profiling memory usage in Node.JS
applications, but there is still a need for a platform-independent native module that requires no
special instrumentation.

This module attempts to satisfy that need.

To get started, import `memwatch` like so:

```javascript
const memwatch = require('@atsjj/memwatch');
```

### Leak Detection

You can then subscribe to `leak` events.  A `leak` event will be emitted when your heap usage has
increased for five consecutive garbage collections:

```javascript
memwatch.on('leak', function(info) { ... });
```

The `info` object will look something like:

```javascript
{ start: Fri, 29 Jun 2012 14:12:13 GMT,
  end: Fri, 29 Jun 2012 14:12:33 GMT,
  growth: 67984,
  reason: 'heap growth over 5 consecutive GCs (20s) - 11.67 mb/hr' }
```

### Heap Usage

The best way to evaluate your memory footprint is to look at heap
usage right after V8 performs garbage collection.  `memwatch` does
exactly this - it checks heap usage only after GC to give you a stable
baseline of your actual memory usage.

When V8 performs a garbage collection (technically, we're talking
about a full GC with heap compaction), `memwatch` will emit a `stats`
event.

```javascript
memwatch.on('stats', function(stats) { ... });
```

The `stats` data will look something like this:

```javascript
{
  "num_full_gc": 17,
  "num_inc_gc": 8,
  "heap_compactions": 8,
  "estimated_base": 2592568,
  "current_base": 2592568,
  "min": 2499912,
  "max": 2592568,
  "usage_trend": 0
}
```

`estimated_base` and `usage_trend` are tracked over time.  If usage
trend is consistently positive, it indicates that your base heap size
is continuously growing and you might have a leak.

V8 has its own idea of when it's best to perform a GC, and under a
heavy load, it may defer this action for some time.  To aid in
speedier debugging, `memwatch` provides a `gc()` method to force V8 to
do a full GC and heap compaction.


### Heap Diffing

So far we have seen how `memwatch` can aid in leak detection.  For
leak isolation, it provides a `HeapDiff` class that takes two snapshots
and computes a diff between them.  For example:

```javascript
// Take first snapshot
const hd = new memwatch.HeapDiff();

// do some things ...

// Take the second snapshot and compute the diff
const diff = hd.end();
```

The contents of `diff` will look something like:

```javascript
{
  "before": { "nodes": 11625, "size_bytes": 1869904, "size": "1.78 mb" },
  "after":  { "nodes": 21435, "size_bytes": 2119136, "size": "2.02 mb" },
  "change": { "size_bytes": 249232, "size": "243.39 kb", "freed_nodes": 197,
    "allocated_nodes": 10007,
    "details": [
      { "what": "String",
        "size_bytes": -2120,  "size": "-2.07 kb",  "+": 3,    "-": 62
      },
      { "what": "Array",
        "size_bytes": 66687,  "size": "65.13 kb",  "+": 4,    "-": 78
      },
      { "what": "LeakingClass",
        "size_bytes": 239952, "size": "234.33 kb", "+": 9998, "-": 0
      }
    ]
  }
}
```

The diff shows that during the sample period, the total number of
allocated `String` and `Array` classes decreased, but `Leaking Class`
grew by 9998 allocations.  Hmmm.

You can use `HeapDiff` in your `on('stats')` callback; even though it
takes a memory snapshot, which triggers a V8 GC, it will not trigger
the `stats` event itself.  Because that would be silly.

## Tests

```
npm install
npm test
```

## Contributing

Please see the Issues to share suggestions and contribute!

## License

The original `memwatch` package is the original work of Lloyd Hilaiel
([http://lloyd.io](http://lloyd.io)) and as such retains the original license.

This project is licensed under the [WTFPL][license-url].
