// Listing 7.20  The new Montric.TreeMenuComponent

Montric.TreeMenuComponent = Ember.Component.extend({
  classNames: ['selectableList'],

  actions: {
    selectNode: function(node) {
      this.set('selectedNode', node.get('id'));
    }
  }
});
