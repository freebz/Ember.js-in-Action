// Listing 6.8  The Emberfest.User model

Emberfest.User.reopenClass({
  collection: Ember.A(),

  find: function(id) {
    return Emberfest.Model.find(id, Emberfest.User);
  },

  findAll: function() {
    return Emberfest.Model.findAll('/user', Emberfext.User, 'users');
  }
});
