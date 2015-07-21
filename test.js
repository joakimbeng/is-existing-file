'use strict';
var path = require('path');
var test = require('tape');

var isExistingFile = require('./');

test('isExistingFile for folders', function (assert) {
  isExistingFile(__dirname, function (val) {
    assert.equal(val, false, 'It should be false');
    assert.end();
  });
});

test('isExistingFile for non existing files', function (assert) {
  isExistingFile(path.join(__dirname, 'aksdjalksdjalksdjlak'), function (val) {
    assert.equal(val, false, 'It should be false');
    assert.end();
  });
});

test('isExistingFile for existing files', function (assert) {
  isExistingFile(__filename, function (val) {
    assert.equal(val, true, 'It should be true');
    assert.end();
  });
});
