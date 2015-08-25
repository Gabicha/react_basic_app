'use strict';

var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    onPrepare: function() {
      browser.ignoreSynchronization = true;
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tmp/screenshots',
         takeScreenShotsOnlyForFailedSpecs: true
      }));
    },
    specs: ['spec/e2e/*.js'],
    baseUrl: 'http://localhost:8000',
    framework: 'jasmine'
};
