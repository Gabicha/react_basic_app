'use strict';

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/react/react-with-addons.js',
      'dist/components/post.js',
      'tests/**/*_spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
