// Listing 2.10  Adding a computed property to convert from Markdown to HTML

Notes.Note = Ember.Object.extend({
  name: null,
  value: null,

  htmlValue: function() {
    var value = this.get('value');
    return Notes.convertFromMarkdownToHtml(value);
  }.property('value')
});
