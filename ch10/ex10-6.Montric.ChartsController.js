// Listing 10.6  How to execute repeated tasks inside the run loop

Montric.ChartsController = Ember.ArrayController.extend({
  startTimer: function() {
    var controller = this;
    var intervalId = setInterval(function() {
      Ember.run(function() {
	if (controller.get('controllers.application.showLiveCharts')) {
	  controller.reloadCharts();
	}
      });
    }, 15000);

    this.set('chartTimerId', intervalId);
  },

  stopTimer: function() {
    if (this.get('chartTimerId') != null) {
      clearInterval(this.get('chartTimerId'));
      this.set('chartTimerId', null);
    }
  }
});
