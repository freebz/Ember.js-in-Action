// Listing 4.24  Using renderTemplate to update the outlet

Ember.TEMPLATES['application'] = Ember.Handlebars.compile('' +
    '{{outlet books}}' +
    '{{outlet selectedBook}}'
);

App.BooksRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('books', { outlet: 'books'});

    var selectedBookController = this.controllerFor('selectedBook');

    this.render('selectedBook', {
      outlet: 'selectedBook',
      controller: selectedBookController
    });
  }
});
