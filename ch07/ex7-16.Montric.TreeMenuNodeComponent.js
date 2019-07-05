// Listing 7.16  The Montric.TreeMenuNodeCompoenent class

Montric.TreeMenuNodeCompoenent = Ember.Component.extend({
  classNames: ['pointer'],

  actions: {
    toggleExpanded: function() {
      this.toggleProperty('node.isExpanded');
    },

    toggleSelected: function() {
      this.toggleProperty('node.isSelected');
    }
  }
});
