// Listing 6.2  TalkRoute

Emberfest.TalkRoute = Ember.Route.extend({
  model: function() {
    return EmberFest.Talk.findAll();
  }
});
