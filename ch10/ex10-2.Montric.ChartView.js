// Listing 10.2  Executing code inside the next run loop using Ember.run.next()

Montric.ChartView = Ember.View.extend({
  contentObserver: function() {
    //Code omitted, but same as listing 10.1

    var view = this;
    Ember.run.next(function() {
      view.rerender();
    });
  }.observes('chart.series')
});
