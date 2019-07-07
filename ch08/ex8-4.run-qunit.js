// Listing 8.4  Bootstrapping the run-qunit.js script

var interval = null;
var start = null;
var args = phantom.args;
if (args.length != 1) {
  console.log("Usage: " + phantom.scriptName + " <URL>");
  phantom.exit(1);
}

var page = require('webpage').create();
page.open(args[0], function(status) {
  if (status !== 'success') {
    console.error("Unable to access network");
    phantom.exit(1);
  } else {
    page.evaluate(logQUnit);
    start = Date.now();
    interval = setInterval(qunitTimeout, 500);
  }
});
