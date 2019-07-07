// Listing 8.12  Testing adding new alerts

var testCallbacks = {
  verifyContentLength: function() {
    Montric.reset();
    if (alertAdminController.get('content.length') > 0 ) {
      stricEqual(1, alertAdminController.get('content.length'),
		 "Expecting one alert. Got: " +
		 alertAdminController.get('content.length'));
      QUnit.start();
    }
  }
};

asyncTest("Create a new Alert and verify that it is shown", 2, function() {
  ok(alertAdminController, "Expecting a non-null AdministrationAlertsController");
  
  alertAdminController.get('content').addObserver('length', 'verifyContentLength');
  
  alertAdminController.set('newAlertname', 'New Alert');
  alertAdminController.createNewAlert();
});
