// Listing 6.12  Implementing updateRecord() on Emberfest.Model

Emberfest.Model.reopenClass({
  updateRecord: function(url, type, model) {
    var collection = this;
    model.set('isSaving', true);
    console.log(JSON.stringify(model));
    $.ajax({
      type: "PUT",
      url: url,
      data: JSON.stringify(model),
      success: function(res, status, xhr) {
	if (res.id) {
	  model.set('isSaving', false);
	  model.setProperties(res);
	} else {
	  model.set('isError', true);
	}
      },
      error: function(xhr, status, err) {
	model.set('isError', true);
      }
    })
  }
});
