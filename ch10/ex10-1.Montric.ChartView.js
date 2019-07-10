// Listing 10.1  Executing code in the run loop

Montric.ChartView = Ember.View.extend({
  contentObserver: function() {
    var series = this.get('chart.series');
    if (series) {
      var palette = new Rickshaw.Color.Palette({scheme: "munin"});

      series.forEach(function(serie) {
	if (!serie.Color) {
	  serie.color = palette.color()
	}
      });

      var view = this;
      Ember.run(function() {
	view.rerender();
      });
    }
  }.observes('chart.series')
});
