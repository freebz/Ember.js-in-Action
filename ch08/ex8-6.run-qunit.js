// Listing 8.6  Printing test results with logQUnit()

function logQUnit() {
  var moduleErrors = [];
  var testErrors = [];
  var assertionErrors = [];

  QUnit.moduleDone(function(context) {
    //Log any failures to the moduleErrors Array
    //Print Module status to the console
    ...
  });

  QUnit.testDone(function(context) {
    //Log any failures to the testError and
    //assertionErrors Arrays
    ...
  });

  QUnit.log(function(context) {
    //Print Assertion error messages to the console
    ...
  });

  QUnit.done(function(context) {
    //Print out any moduleErrors and testErrors
    //Print Stats that show the total. successful and failed
    //tests
    ...
      window.qunitDone = context;
  });
}
