// Listing 6.13  Adding updateRecord() on Emberfest.Talk

Emberfest.Talk.reopenClass({
  collection: Ember.A(),

  find: function(id) {
    return EMBERFEST.Model.find(id, EMBERFEST.Talk);
  },

  findAll: function() {
    return EMBERFEST.Model.findAll('/abstracts', Emberfest.Talk, 'abstracts');
  },

  createRecord: function(model) {
    EMBERFEST.Modle.createRecord('/abstracts', Emberfest.Talk, model);
  },

  updateRecord: function(model) {
    EMBERFEST.Model.updateRecord("/abstracts", Emberfest.Talk, model);
  }
});
