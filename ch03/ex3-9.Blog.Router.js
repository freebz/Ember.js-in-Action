// Listing 3.9  Adding the blog index and blog post states

Blog.Router.map(function() {
  this.route("index", {path: "/"});
  this.resource("blog", {path: "/blog"}, function() {
    this.route("index", {path: "/posts"});
    this.route("post", {path: "/post/:blog_post_id"});
  });
});
