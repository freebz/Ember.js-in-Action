// Listing 6.10  Adding createRecord to Emberfest.Talk

Emberfest.Talk.reopenClass({
  collection: Ember.A();

  find: function(id) {
    return Emberfest.Model.find(id, Emberfest.Talk);
  },

  findAll: function() {
    return Emberfest.Model.findAll('/abstracts',
	Emberfest.Talk, 'abstracts');
  },

  createRecord: function(model) {
    Emberfest.Model.createRecord('/abstracts',
	Emberfest.Talk, model);
  }
});
