(function () {
  var windowHeight = 0;
  var windowWidth = 0;

  function fetchWindowDimensions() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  }

  function determineMode() {
    fetchWindowDimensions();
    data = {
      width: windowWidth,
      height: windowHeight,
    };
    if (windowHeight > windowWidth) {
      data.isPortrait = true;
    } else {
      data.isPortrait = false;
    }

    return data;
  }

  console.log(determineMode());

  window.onresize = function (event) {
    console.log(determineMode());
  };
})();
