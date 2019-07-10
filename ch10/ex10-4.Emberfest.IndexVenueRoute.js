// Listing 10.4  Scrolling to a specific element in the DOM

Emberfest.IndexVenueRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    _gaq.push(['_trackPageview', "/venue"]);

    document.title = 'Venue - Ember Fest';
  },

  renderTemplate: function() {
    this._super();
    document.getElementById('venue').scrollIntoView();
  }
});
