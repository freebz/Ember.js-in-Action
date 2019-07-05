// Listing 7.13  The tree-menu data model

Montric.MainMenuModel = DS.Model.extend({
  name: DS.attr('string'),
  nodeType: DS.attr('string'),
  parent: DS.belongsTo('mainMenu'),
  children: DS.hasMany('mainMenu'),
  chart: DS.belongsTo('chart'),

  isSelected: false,
  isExpanded: false,

  hasChildren: function() {
    return this.get('children').get('length') > 0;
  }.property('children'),

  isLeaf: function() {
    return this.get('children').get('length') == 0;
  }.property('children')
});
