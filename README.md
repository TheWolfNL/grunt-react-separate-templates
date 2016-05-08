# grunt-react-separate-templates

> Simplifying the use of React with separate templates

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-react-separate-templates --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-react-separate-templates');
```

## The "react-separate-templates" task

### Overview
In your project's Gruntfile, add a section named `react-separate-templates` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  react-separate-templates: {
    options: {
      html: 'templates/',
      js: 'js/',
      jsx: 'tmp/',
    },
});
```

### Options

#### options.html
Type: `String`
Default value: `templates/`

Your HTML source directory

#### options.js
Type: `String`
Default value: `js/`

Your JS source directory

#### options.jsx
Type: `String`
Default value: `tmp/`

Your JSX output directory

### Usage Examples

#### Default Options
In this example, the default options are used to combine the files from test/fixtures into JSX, maintaining directory structure.

```js
grunt.initConfig({
  react-separate-templates: {
    options: {
      html: 'test/fixtures/templates/',
      js: 'test/fixtures/js/',
      jsx: 'tmp/',
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
