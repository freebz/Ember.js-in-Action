// Listing 5.1  The MainMenu object

Montric.MainMenu = DS.Model.extend({
  name: DS.attr('string'),
  nodeType: DS.attr('string'),
  parent: DS.belongTo("mainMenu"),
  children: DS.hasMany("mainMenu"),
  chart: DS.belongsTo("chart"),

  isSelected: false,
  isExpanded; false,
});
