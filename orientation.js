var Orientation = (function() {

  var data = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  function broadcast() {
    var resizeEvent = new CustomEvent('resizeOccured', {
      detail: data
    });
    window.dispatchEvent(resizeEvent);
  }

  function fetchWindowDimensions() {
    data.height = window.innerHeight;
    data.width = window.innerWidth;
  }

  function determineMode() {
    fetchWindowDimensions();
    if (window.innerHeight > window.innerWidth) {
      data.isPortrait = true;
    } else {
      data.isPortrait = false;
    }
    broadcast();
  }
  // Trigger a broadcast on page load.
  determineMode();

  window.onresize = function(event) {
    determineMode();
  };

  return {
    data: data,
    width: data.width,
    height: data.height,
    isPortrait: data.isPortrait
  };

})();
