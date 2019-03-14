// Listing 3.3  BlogPost model structure

Blog.BlogPost = DS.Model.extend({
  postTitle: DS.attr('string'),
  postDate: DS.attr('date'),
  postShortIntro: DS.attr('string'),
  postLongIntro: DS.attr('string'),
  postFilename: DS.attr('string'),
  markdown: null
});
