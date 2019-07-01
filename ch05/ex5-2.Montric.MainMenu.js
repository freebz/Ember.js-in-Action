// Listing 5.2  Adding computed properties to the MainMenu

Montric.MainMenu = DS.Model.extend({
  name: DS.attr('string'),
  nodeType: DS.attr('string'),
  parent: DS.belongsTo('mainMenu'),
  children: DS.hasMany('mainMenu'),
  chart: DS.belongsTo('chart'),

  isSelected: false,
  isExpanded: false,

  hasChildren: function() {
    return this.get('children').get('length') > 0;
  }.property('children').cacheable(),

  isLeaf: function() {
    return this.get('children').get('length') == 0;
  }.property('children').cacheable()
});
