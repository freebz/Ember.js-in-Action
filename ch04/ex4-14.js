// Listing 4.14  Compiling your templates into Ember.TEMPLATES

Ember.TEMPLATES['application'] = Ember.Handlebars.compile('' +
    'Welcome, {{user.fullName}}!'
);

Ember.TEMPLATES['books'] = Ember.Handlebars.compile('' +
    '<div class="books">' +
    'Book Catalog' +
    '</div>'
);
