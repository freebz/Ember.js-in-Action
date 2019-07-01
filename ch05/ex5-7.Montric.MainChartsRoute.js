// Listing 5.7  Fetching data from your models

Montric.MainChartsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('mainMenu');
  }
});
