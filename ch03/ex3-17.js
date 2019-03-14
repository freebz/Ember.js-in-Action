// Listing 3.17  Ember Data's initialization and the Ember Container

Ember.onLoad('Ember.Application', function(Application) {
  Application.initializer({
    name: "store",

    initialize: function(container, application) {
      application.register('store:main', application.Store || DS.Store);
      application.register('serializer:_default', DS.JSONSerializer);
      application.register('serializer:_rest', DS.RESTSerializer);
      application.register('adapter:_rest', DS.RESTAdapter);

      container.lookup('store:main');
    }
  });

...

  Application.initializer({
    name: "injectStore",

    initialize: function(container, application) {
      application.inject('controller', 'store', 'store:main');
      application.inject('route', 'store', 'store:main');
      application.inject('dataAdapter', 'store', 'store:main');
    }
  });
