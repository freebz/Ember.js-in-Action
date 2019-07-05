// Listing 7.19  The updated Montric.TreeMenuNodeComponent

Montric.TreeMenuNodeComponent = Ember.Component.extend({
  classNames: ['pointer'],

  actions: {
    toggleExpanded: function() {
      this.toggleProperty('node.isExpanded');
    },

    toggleSelected: function() {
      this.toggleProperty('node.isSelected');
    },

    selectNode: function(node) {
      this.sendAction('action', node);
    }
  },

  isSelected: function() {
    return this.get('selectedNode') === this.get('node.id');
  }.property('selectedNode', 'node.id')
});
