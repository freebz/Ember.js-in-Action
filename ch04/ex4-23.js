// Listing 4.23  Retrieving the action context

App.EditBookController = Ember.Route.extend({
  actions: {
    editBookDetails: function(book) {
      console.log(book.get('name'));
    }
  }
});
