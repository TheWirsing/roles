Package.describe({
  name: 'thewirsing:roles',
  summary: 'The most advanced roles package for meteor',
  version: '3.0.0',
  git: 'https://github.com/thewirsing/roles'
})


Package.onUse(function(api) {
  api.versionsFrom(['1.0', '2.3'])

  both = ['client', 'server']

  api.use([
    'ecmascript',
    'accounts-base',
    'underscore',
    'mongo',
    'check'
  ], both)

  api.export('Roles')

  api.addFiles(['roles_common.js', 'keys.js'], both)

  api.addFiles('roles_client.js', 'client')
  api.addFiles('roles_server.js', 'server')

  //api.export('Roles')
  //api.export('objectHasKey')
})

// Package.onTest(function(api) {
//   api.use('tinytest')
//   api.use('orionjs:core')
// })
