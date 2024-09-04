app.beginUndoGroup("Auto parent")

var activeComp = app.project.activeItem;
var length = 0;
var selectedLayers = activeComp.selectedLayers;
var topLayer = selectedLayers[0]

for (var i = 1; i < selectedLayers.length; i++) {
  var layer = selectedLayers[i]
  layer.parent = topLayer
  // layer.outPoint = i + 1;
  length++;
}

app.endUndoGroup()

