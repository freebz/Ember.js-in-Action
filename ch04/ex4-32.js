// Listing 4.32  Using the {{yield}} expression

App.MyLayoutView = Ember.View.extend({
  layout: Ember.Handlebars.compile('' +
      '<div class="layoutClass">{{yield}}</div>'),
  templateName: 'viewTemplate'
});
