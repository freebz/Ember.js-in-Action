// Listing 8.13  Measuring render.view

Ember.suscribe('render.view', {
  ts: null,
  before: function(name, timestamp, payload) {
    ts = timestamp;
  },
  after: function(name, timestamp, payload, beforeRet) {
    console.log('instrument: ' + name +
		" " + JSON.stringify(payload) +
		" took:" + (timestamp - ts));
  }
});
