var _renderMarkers = function(comp) {
  var images = [];
  var markers = comp.markerProperty;
  for (var i = 1; i <= markers.numKeys; i++) {
    var time = markers.keyTime(i);
    system.callSystem("cd ~/Desktop && mkdir markers");
    comp.saveFrameToPng(time, File("~/Desktop/markers/" + i + ".png"));
  }
};

_renderMarkers(app.project.activeItem);