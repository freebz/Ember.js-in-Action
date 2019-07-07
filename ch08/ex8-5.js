// Listing 8.5  Exiting PhantomJS via qunitTimeout()

function qunitTimeout() {
  var timeout = 60000;
  if (Date.now() > start + timeout) {
    console.error("Tests timed out");
    phantom.exit(123);
  } else {
    var qunitDone = page.evaluate(function() {
      return window.qunitDone;
    });

    if (qunitDone) {
      clearInterval(interval);
      if (qunitDone.failed > 0) {
	phantom.exit(1);
      } else {
	phantom.exit();
      }
    }
  }
}
