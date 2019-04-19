// Currently in sync with Node.js test/parallel/test-assert-fail.js
// https://github.com/nodejs/node/commit/1ed3c54ecbd72a33693e5954f86bcc9fd9b1cc09

'use strict';

require('../common');
const assert = require('../assert-loader');

// No args
assert.throws(
  () => { assert.fail(); },
  {
    code: 'ERR_ASSERTION',
    name: 'AssertionError',
    message: 'Failed',
    operator: 'fail',
    actual: undefined,
    expected: undefined,
    generatedMessage: true
  }
);

// One arg = message
assert.throws(() => {
  assert.fail('custom message');
}, {
  code: 'ERR_ASSERTION',
  name: 'AssertionError',
  message: 'custom message',
  operator: 'fail',
  actual: undefined,
  expected: undefined,
  generatedMessage: false
});

// One arg = Error
assert.throws(() => {
  assert.fail(new TypeError('custom message'));
}, {
  name: 'TypeError',
  message: 'custom message'
});
