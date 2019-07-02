// Listing 6.9  Implementing the createRecord() function

Emberfest.Model.reopenClass({
  createRecord: function(url, type, model) {
    var collection = this;
    model.set('isSaving', true);
    $.ajax({
      type: "POST",
      url: url,
      data: JSON.stringify(model),
      success: function(res, status, xhr) {
	if (res.submitted) {
	  Ember.get(type, 'collection').pushObject(model);
	  model.set('isSaving', false);
	} else {
	  model.set('isError', true);
	}
      },
      error: function(xhr, status, err) {
	model.set('isError', true);
      }
    });
  },
});
