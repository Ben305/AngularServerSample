Package.describe({
  name: 'business-services',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
      'angular@1.3.7',
      'netanelgilad:angular-server@1.4.7'
  ]);

  api.imply([
    'angular@1.3.7',
    'netanelgilad:angular-server@1.4.7'
  ]);

  api.addFiles('module.js');

  api.addFiles([
      'lib/echoService.js',
      'lib/calculatorService.js'
  ], 'server');
});

Package.onTest(function(api) {
  api.use('business-services');
  api.use('sanjo:jasmine@0.21.0');
  api.use('angular:angular-mocks@1.5.0');

  api.addFiles([
    'lib/echoService.spec.js',
    'lib/calculatorService.spec.js'
  ], 'server');

});
