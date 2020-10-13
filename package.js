Package.describe({
  name: 'igoandsee:show-gemba-ondemmand-collection',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.use('mongo@1.1.17');
  api.mainModule('show-gemba-ondemmand-collection.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('show-gemba-ondemmand-collection');
  api.mainModule('show-gemba-ondemmand-collection-tests.js');
});
