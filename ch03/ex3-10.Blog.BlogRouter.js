// Listing 3.10  Updated and new routes

Blog.BlogIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('blogPost');
  }
});

Blog.BlogPostRoute = Ember.Route.extend({
  model: function(blogPost) {
    return this.store.find('blogPost', blogPost.blog_post_id);
  }
});
