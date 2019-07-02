// Listing 6.15  Implementing delete() on Emberfest.Model

delete: function(url, type, id) {
  var collection = this;
  $.ajax({
    type: 'DELETE',
    url: url + "/" + id,
    success: function(res, status, xhr) {
      if (res.deleted) {
	var item = collection.contentArrayContains(id, type);
	if (item) {
	  Ember.get(type, 'collection').removeObject(item);
	}
      }
    },
    error: function(xhr, status, err) {
      alert('Unable to delete: ' + status + " :: " + err);
    }
  });
}
