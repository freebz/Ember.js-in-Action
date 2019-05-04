// Listing 4.17  Injecting a view with the {{view}} expression

Ember.TEMPLATES['bookDetails'] = Ember.Handlebars.compile('' +
    '<div class="book">' +
        '<h1>{{title}}</h1>' +
        '<p>By: {{author}}<br />' +
        '{{text}}</p>' +
    '</div>'
);

Ember.TEMPLATES['books'] = Ember.Handlebars.compile('' +
    '{{#each book in books}} ' +
        '{{view App.BookDetailsView valueBinding="book"}}' +
    '{{/each}}'
);

App.BookDetailsView = Ember.View.extend({
    templateName: 'bookDetails'
});

Ember.TEMPLATES['application'] = Ember.Handlebars.compile('' +
    '<h1>Welcome, {{user.fullName}}!</h1>' +
    '{{view Ember.View templateName="books"}}'
);
