// Listing 9.3  The Montric.UserController.init() function

Montric.UserController = Ember.ObjectController.extend({
  init: function() {
    this._super();
    this.set('content', Ember.Object.create());
    var controller = this;
    navigator.id.watch({
      loggedInUser: null,
      onlogin: function(assertion) {},
      onlogout: function() { }
    });
  }
});
