// Listing 3.13  The Blog.BlogPostController

Blog.BlogPostController = Ember.ObjectController.extend({
  contentObserver: function() {
    if (this.get('content')) {
      var page = this.get('content');
      var id = page.get('id');

      $.get("/posts/" + id + ".md", function(data) {
	var converter = new Showdown.converter();
	page.set('markdown',
	  new Handlebars.SafeString(converter.makeHtml(data)));
      }, "text")
	.error(function() {
	  page.set('markdown',  "Unable to find specified page");
	  //TODO: Navigate to 404 state
	});

    }
  }.observes('content')
});
