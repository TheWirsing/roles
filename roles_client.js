var subscription = Meteor.subscribe('nicolaslopezj_roles')

/**
 * Helper to check if roles are ready
 */
Roles.isReady = function () {
  return subscription.ready()
}

export { Roles }