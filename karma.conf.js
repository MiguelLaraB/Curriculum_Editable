module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-coverage-istanbul-reporter'),
        require('karma-jasmine-html-reporter'),
        require('karma-spec-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false
      },
      reporters: ['spec', 'kjhtml', 'coverage-istanbul'],
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, './coverage/front-mycv'),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
      },
      browsers: ['ChromeHeadless'],
      singleRun: true,
      restartOnFileChange: true
    });
  };