// Listing 5.9  One-to-many association

Blog.Post = DS.Model.extend({
  name: DS.attr('string'),
  comments: DS.hasMany('comment')
});

Blog.Comment = DS.Model.extend({
  text: DS.attr('string'),
  post: DS.belongsTo('post');
});
