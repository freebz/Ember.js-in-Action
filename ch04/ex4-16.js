// Listing 4.16  Creating a view with an inline template

App.BookView = Ember.View.Extend({
  template: Ember.Handlebars.compile('' +
    '<div class="books">' +
      'Book Catalog' +
    '</div>')
})
