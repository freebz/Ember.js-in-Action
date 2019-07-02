// Listing 6.1  Ember Fest router

Emberfest.Router = Ember.Router.extend({
  location: 'history'
});

Emberfest.Router.map(function() {

  this.route('tickets');
  this.resource('talks', function() {
    this.route('talk', {path: "/talk/:talk_id"});
  });
  this.route('schedule');
  this.route('venue');
  this.route('organizers');
  this.route('sponsors');
  this.route("registerTalk");
});
