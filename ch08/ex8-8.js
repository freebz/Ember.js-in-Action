// Listing 8.8  Testing the generateChartString() function

var appController;
var inputDate = new Date(2013, 2, 27, 11, 15, 00);

module("Montric.AppController", {
  setup: function() {
    Ember.run(function() {
      appController =
	Montric.__container__.lookup("controller:application");
    });
  },

  teardown: function() {

  }
});
