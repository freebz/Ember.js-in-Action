// Listing 10.3  Executing code inside the next run loop using Ember.run.later()

Montric.ChartView = Ember.View.extend({
  contentObserver: function() {
    //Code omitted, but same as listing 10.1

    var view = this;
    Ember.run.later(function() {
      view.rerender();
    }, 1);
  }.observes('chart.series')
});
