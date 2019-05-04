// Listing 4.27  The blog router

Blog.Router.map(function() {
  this.resource('index', {path: '/'}, function() {
    this.resource{'blog', {path: '/blogs'}, function() {
      this.resource('posts', {path: '/posts'}, function() {
	this.route('index', {path: '/'});
	this.route('post', {path: '/:blog_post_id'});
      })
    })
  });
  this.route('about');
});
