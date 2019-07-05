// Listing 7.12  The Montric.SelectableListComponent

Montric.SelectableListComponent = Ember.Component.extend({
  nodeForDelete: null,

  actions: {
    showDeleteMOdal: function(node) {
      if (node) {
	this.set('nodeForDelete', node);
      }
    }
  }
});
