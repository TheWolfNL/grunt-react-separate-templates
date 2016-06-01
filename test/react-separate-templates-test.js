'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.react-separate-templates = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/menu.jsx');
    var expected = grunt.file.read('test/expected/jsx/menu.jsx');
    test.equal(actual, expected, 'The JS and HTML files are combined into a proper JSX file.');

    var actualSub = grunt.file.read('tmp/menu/menu.jsx');
    var expectedSub = grunt.file.read('test/expected/jsx/menu/menu.jsx');
    test.equal(actualSub, expectedSub, 'The JS and HTML files in subdirectories are combined into a proper JSX file.');

    test.done();
  }
};
