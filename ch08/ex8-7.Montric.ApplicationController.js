// Listing 8.7  Montric.ApplicationController generateChartString() function

Montric.ApplicationController = Ember.Controller.extend({
  dateFormat: 'dd mmmm yyyy HH:MM',

  generageChartString: function (date) {
    var fmt = this.get('dateFormat') || 'dd.mm.yy';

    var dateString = date ? dateFormat(date, fmt) : "";
    return dateString;
  }
});
