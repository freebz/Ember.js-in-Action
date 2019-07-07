// Listing 8.9  Creating five unit tests for generateChartString() function

test("Verify appController", function() {
  Montric.reset();
  ok(appController, "Expecting non-null appController");
});

test("Testing the default dataFormat", function() {
  Montric.reset();
  strictEqual("27 March 2013 11:15",
	      appController.generateChartString(inputDate), "Default Chart String Generation Ok");
});

test("Testing custom dateFormat", function() {
  Montric.reset();
  appController.set('dateFormat', 'dd.mm.yyyy');
  strictEqual("27.03.2013", appController.generateChartString(inputDate),
	      "Custom Chart String Generation OK");
});

test("Testing null dateFormat", function() {
  Montric.reset();
  appController.set('dateFormat', null);
  strictEqual("27.03.13",
	      appController.generateChartString(inputDate),
	      "Null Chart String Generation OK");
});

test("Testing null date", function() {
  Montric.reset();
  strictEqual("", appController.generateChartString(null),
	      "Null Date OK");
});
