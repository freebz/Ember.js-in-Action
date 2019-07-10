// Listing 10.5  Scheduling code in the AfterRender queue using Ember.run.schedule()

Emberfest.IndexVenueRoute = Ember.Route.extend({
  renderTemplate: function() {
    this._super();
    Ember.run.schedule('afterRender', this, function() {
      document.getElementById('venue').scrollIntoView();
    });
  }
});
