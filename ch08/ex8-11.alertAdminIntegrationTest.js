// Listing 8.11  The alertAdminIntegrationTest.js module setup

var alertAdminController;

module("Montric.AdministrationAlertsController", {
  setup: function() {
    console.log('Admin Alerts Controller Module setup');
    Montric.server.autoRespond = true;
    Montric.server.respondWith("GET", "/alert_models",
			       [200, { "Content-Type", "text/json" },
				'{"alert_models":[]}'
			       ]);

    Montric.server.respondWith("POST", "/alert_models",
			       [200, { "Content-Type": "text/json" },
				'{"alert_model":{"alert_source":"null","id":"New Alert","alert_delay":0,"alert_plugin_ids":[],"alert_notifications":"","alert_activated":false,"alert_type":"greater_than"}}'
			       ]);

    Ember.run(function() {
      alertAdminController =
	Montric.__container__.lookup("controller:administrationAlerts");
    });
  },

  teardown: function() {
  }
});
