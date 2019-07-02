// Listing 6.5  The findAll() function

findAll: function(url, type, key) {

  var collection = this;
  $.getJSON(url, function(data) {
    $.each(data[key], function(i, row) {
      var item = collection.contentArrayContains(row.id, type);
      if (!item) {
	item = type.create();
	Ember.get(type, 'collection').pushObject(item);
      }
      item.setProperties(row);
      item.set('isLoaded', true);
    });
  });

  return Ember.get(type, 'collection');
}
