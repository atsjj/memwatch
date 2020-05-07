'use strict';

const memwatch = require('./');
const test = require('ava');

test('library - exports some functions', assert => {
  assert.truthy(memwatch.gc);
  assert.truthy(memwatch.on);
  assert.truthy(memwatch.once);
  assert.truthy(memwatch.removeAllListeners);
  assert.truthy(memwatch.HeapDiff);
});

test('gc - calling .gc() should cause a stats() event to be emitted', async assert => {
  const statsPromise = new Promise(resolve => {
    memwatch.once('stats', resolve);
  });

  memwatch.gc();

  assert.is(typeof await statsPromise, 'object');
});

test('heapdiff - should detect allocations', assert => {
  function LeakingClass() {};
  let arr = [];
  let hd = new memwatch.HeapDiff();
  for (let i = 0; i < 100; i++) arr.push(new LeakingClass());
  let diff = hd.end();

  assert.true(Array.isArray(diff.change.details));
  assert.true(diff.change.details instanceof Array);

  // find the LeakingClass elem
  let leakingReport;
  diff.change.details.forEach(function(d) {
    if (d.what === 'LeakingClass')
      leakingReport = d;
  });

  assert.truthy(leakingReport);
  assert.truthy(((leakingReport['+'] - leakingReport['-']) > 0));
});

test('heapdiff - double end should throw', assert => {
  let hd = new memwatch.HeapDiff();

  assert.notThrows(() => hd.end());
  assert.throws(() => hd.end());
});

/**
 * equivalent to `new require('memwatch').HeapDiff()`
 * @see https://github.com/marcominetti/node-memwatch/issues/30
 */
test('heapdiff - improper allocation should throw an exception', assert => {
  assert.throws(() => new (memwatch.HeapDiff()));
});
