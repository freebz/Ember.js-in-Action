// Listing 2.5  Using computed properties as setters

Notes.Duration = Ember.Object.extend({
  durationSeconds: 0,

  durationString: function(key, value) {
    if (arguments.length === 2 && value) {
      var valueParts = value.split(":");
      if (valueParts.length == 3) {
	var duration = (valueParts[0] * 60 * 60) +
	    (valueParts[1] * 60) + (valueParts[2] * 1);
	this.set('durationSeconds', duration);
      }
    }
    var duration = this.get('durationSeconds');

    var hours   = Math.floor(duration / 3600);
    var minutes = Math.floor((duration - (hours * 3600)) / 60);
    var seconds = Math.floor(duration - (minutes * 60) - (hours * 3600));

    return ("0" + hours).slice(-2) + ":" +
      ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  }.property('durationSeconds').cacheable()
});
