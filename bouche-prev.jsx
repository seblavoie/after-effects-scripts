// The action to be performed. Next is 1, Prev is -1.
concat = -1;
activeComp = app.project.activeItem

// Propery is selected
if(activeComp.selectedProperties.length > 0) {
  updateProperties()
}

// Layer is selected update first slider
else if(activeComp.selectedLayers.length > 0) {
  property = activeComp.selectedLayers[0].Effects.property(1)
  setPropertyValue(property.property("Slider"))
}

// First layer has Frame
else if(activeComp.layer(1).Effects.property("Frame") != null) {
  property = activeComp.layer(1).Effects.property("Frame")
  setPropertyValue(property.property("Slider"))
}

// Update bouche
else {
  var controllerLayer = esy.composition.first(activeComp, "Controller")
  var bouche = controllerLayer.Effects.property("Bouche")
  if(bouche) {
    setPropertyValue(bouche.property("Slider"))
  }
}


function updateProperties() {
  var selectedProperties = activeComp.selectedProperties
  for (var i = 0; i < selectedProperties.length; i++) {
    updateProperty(selectedProperties[i])
  }
}

function updateProperty(property) {
  if(property instanceof PropertyGroup) {
    setPropertyValue(property.property("Slider"))
  }
}

function setPropertyValue(property) {
  var value = property.value + concat
  if(property.numKeys > 0) {
    property.setValueAtTime(activeComp.time, value)
    key = property.nearestKeyIndex(activeComp.time)

    // Set keyframe to hold if previous one is hold
    if(key - 1 > 0) {
      if(property.keyInInterpolationType(key - 1) == KeyframeInterpolationType.HOLD) {
        property.setInterpolationTypeAtKey(key, KeyframeInterpolationType.HOLD);
      }
    }
  } else {
    property.setValue(value)
  }

}

