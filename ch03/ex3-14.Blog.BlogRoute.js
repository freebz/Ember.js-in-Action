// Listing 3.14  Updated Blog.BlogIndexRoute and Blog.BlogRoute routes

Blog.BlogRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('blogPOst');
  }
});

Blog.BlogIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('blog');
  }
});
