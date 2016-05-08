/*
 * grunt-react-separate-templates
 * https://github.com/thewolfnl/grunt-react-separate-templates
 *
 * Copyright (c) 2016 Tjeerd Ritsma
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('react_separate_templates', 'Combining Javascript and HTML into JSX', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      html: 'templates/',
      js: 'js/',
      jsx: 'output/'
    });

    var convert = require('react-st');

    grunt.log.writeln('combine react separated templates: ' + options.html + ' + ' + options.js + ' => ' + options.jsx );

    grunt.file.recurse(options.js, function callback(abspath, rootdir, subdir, filename){
      filename = filename.replace(/\.[^/.]+$/, "");
      var fileJS = options.js + (subdir !== undefined ? subdir + '/' : '' ) + filename + '.js';
      var fileHTML = options.html + (subdir !== undefined ? subdir + '/' : '' ) + filename + '.html';
      var fileJSX = options.jsx + (subdir !== undefined ? subdir + '/' : '' ) + filename + '.jsx';
      grunt.log.debug('JS File: ' + fileJS );
      grunt.log.debug('HTML File: ' + fileHTML );
      grunt.log.debug('JSX output File: ' + fileJSX );
      
      // Check for JS file
      if (!grunt.file.exists(fileJS)) {
        grunt.log.warn('Source file "' + fileJS + '" not found.');
        return false;
      }
      // Check for HTML file
      if (!grunt.file.exists(fileHTML)) {
        grunt.log.warn('Source file "' + fileHTML + '" not found.');
        return false;
      }
      
      fileJS = grunt.file.read(fileJS);
      fileHTML = grunt.file.read(fileHTML);

      if(typeof fileJS === "string" && typeof fileHTML === "string"){
        convert(fileJS, fileHTML, function (err, jsxContent) {
          // check err
          if(err != null){
            return false;
          }
          // save jsxContent to fileJSX
          grunt.file.write(fileJSX, jsxContent);
          grunt.log.writeln('File "' + fileJSX + '" created.');
        });
      }
    });
  });

};
