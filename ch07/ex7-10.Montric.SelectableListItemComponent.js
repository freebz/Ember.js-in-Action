// Listing 7.10  The Montric.SelectableListItemComponent

Montric.SelectableListItemComponent = Ember.Component.extend({
  actions: {
    showDeleteModal: function() {
      $('#deleteAlertModal').modal('show');
      this.sendAction('action', this.get(node));
    }
  }
});
