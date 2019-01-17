// Listing 1.7  Initializing Ember Data

Notes.Store = DS.Store.extend({
    adapter: DS.LSAdapter
});

Notes.Note = DS.Model.extend({
    name: DS.attr('string'),
    value: DS.attr('string')
});
