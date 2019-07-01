// Listing 5.8  The Montric.Chart model

Montric.Chart = DS.Model.extend({
  name: DS.attr('string'),
  series: DS.attr('raw')
});
