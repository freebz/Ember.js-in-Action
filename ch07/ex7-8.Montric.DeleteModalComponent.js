// Listing 7.8  Montric.DeleteModalComponent class

Montric.DeleteModalComponent = Ember.Component.extend({
  className: ["modal", "fade"],

  actions: {
    deleteItem: function() {
      var item = this.get('item');
      if (item) {
	item.deleteRecord();
	item.save();
	$("#" + this.get('elementId')).modal('hide');
      }
    }
  }
});
