// Listing 9.9  Updating Montric.UserController.init with cookie support

Montric.UserController = Ember.ObjectController.extend({
  needs: ['application', 'account'],

  init: function() {
    this._super();
    this.set('content', Ember.Object.create());
    var controller = this;
    var cookieUser = Montric.get('cookieUser');
    if (cookieUser == null) {
      navigator.id.watch({
	loggedInUser: null,
	onlogin: function(assertion) { },
	onlogout: function() { }
      });
    } else {
      this.set('content', Montric.get('cookieUser'));
    }
  }
});
