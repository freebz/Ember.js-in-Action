// Listing 6.16  Adding delete() on Emberfest.Talk

Emberfest.Talk.reopenClass({
  collection: Ember.A(),

  delete: function(id) [
    EMBERFEST.Model.delete('/abstracts', Emberfest.Talk, id);
  }
});
