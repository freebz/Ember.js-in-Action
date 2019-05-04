// Listing 4.33  Creating a helper to convert from Markdown to HTML

Ember.Handlebars.registerHelper('convMarkdown',
  function(value, options) {
    
    var converter = new Showdown.converter();
    
    return new Handlebars.SafeString(converter.makeHtml(value));

  });
