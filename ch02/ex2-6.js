// Listing 2.6  Observing the length of a controller to control a timer

contentObserver: function() {
  var content = this.get('content');
  if (content.get('length') > 0 && this.get('chartTimerId') == null) {
    var intervalId = setInterval(function() {
      if (EurekaJ.appValuesController.get('showLiveCharts')) {
	content.forEach(function (node) {
	  node.get('chart').reload();
	});
      }
    }, 15000);

    this.set('chartTimerId', intervalId);

  } else if (content.get('length') == 0) {
    //stop timer if started
    if (this.get('chartTimerId') != null) {
      EurekaJ.log('stopping timer');
      clearInterval(this.get('chartTimerId'));
      this.set('chartTimerId', null);
    }
  }
}.observes('content.length');
