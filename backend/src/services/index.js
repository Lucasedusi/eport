module.exports = {
  signIn: require('./signInService'),

  storeUser: require('./userService')['storeUser'],
  getUserByPk: require('./userService')['getUserByPk'],
  editUser: require('./userService')['editUser'],
  destroyUser: require('./userService')['destroyUser'],

  listPublicBid: require('./publicBidService')['listPublicBid'],
  storePublicBid: require('./publicBidService')['storePublicBid'],
  getPublicBidByPk: require('./publicBidService')['getPublicBidByPk'],

  listEvent: require('./eventService')['listEvent'],
  storeEvent: require('./eventService')['storeEvent'],
  getEventByPk: require('./eventService')['getEventByPk'],
  editEvent: require('./eventService')['editEvent'],
  destroyEvent: require('./eventService')['destroyEvent'],

  listSegment: require('./segmentService')['listSegment'],
};
