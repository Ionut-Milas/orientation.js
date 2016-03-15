var Orientation = (function() {

  var data = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  function broadcast() {
    console.log("broadcast ", data);
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

  console.log(determineMode());

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
