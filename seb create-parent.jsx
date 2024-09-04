app.beginUndoGroup("Create parent")

var activeComp = app.project.activeItem;
var length = 0;
var selectedLayers = activeComp.selectedLayers;
var topLayer = selectedLayers[0]

var parent = activeComp.layers.addNull(activeComp.duration)
// alert(topLayer.transform.position.value)
parent.parent = topLayer.parent
parent.transform.position.setValue(topLayer.transform.position.value)
parent.transform.position.dimensionsSeparated = topLayer.transform.position.dimensionsSeparated
parent.transform.scale.setValue(topLayer.transform.scale.value)
parent.transform.opacity.setValue(topLayer.transform.opacity.value)
parent.threeDLayer = topLayer.threeDLayer

var hasPrefix = (topLayer.name.charAt(0) == "-")

var strippedName = topLayer.name.substring(topLayer.name.lastIndexOf(">"))
var name = (hasPrefix ? "" : "- ") + strippedName
name = name.replace(" > ", " ")
parent.name = name

for (var i = 0; i < selectedLayers.length; i++) {
  var layer = selectedLayers[i]
  layer.parent = parent
  length++;
}

parent.moveBefore(topLayer)
topLayer.name = (hasPrefix ? "-" : "") + topLayer.name

// topLayer.parent = parent

app.endUndoGroup()

 