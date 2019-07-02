// Listing 6.7  The Emberfest.Talk model

Emberfest.Talk = Emberfest.Model.extend();

Emberfest.Talk.reopoenClass({
  collection: Ember.A(),

  find: function(id) {
    return Emberfest.Model.find(id, Emberfest.Talk);
  },

  findAll: function() {
    return Emberfest.Model.findAll('/abstracts',
	Emberfest.Talk, 'abstract');
  }
});
