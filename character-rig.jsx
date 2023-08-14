app.beginUndoGroup("Add character")

var activeComp = app.project.activeItem;

var wiggleExpression = 'seedRandom(index); \
if(thisComp.layer("Controller").effect("Wiggle active?")("Checkbox") == 1) { \
wiggle(thisComp.layer("Controller").effect("Freq")("Slider"), thisComp.layer("Controller").effect("Amp")("Slider")) \
} else { \
value \
}';

var eyesExpression = 'effect("Eyes closed!")("Checkbox") == 1 ? 1 : loopOut()'

// Adding controller layer
var controllerLayer = activeComp.layers.addNull(activeComp.duration);
controllerLayer.name = "Controller";
controllerLayer.enabled = false
effect = controllerLayer.Effects.addProperty("Slider Control");
effect.name = "Mouth"
effect.property("Slider").setValueAtTime(0, 0)

effect = controllerLayer.Effects.addProperty("Slider Control");
effect.name = "Freq"

effect.property("Slider").setValue(.6)
effect = controllerLayer.Effects.addProperty("Slider Control");
effect.name = "Amp"

effect.property("Slider").setValue(4)
effect = controllerLayer.Effects.addProperty("Slider Control");
effect.name = "Wiggle"

effect.property("Slider").expression = wiggleExpression
effect = controllerLayer.Effects.addProperty("Checkbox Control");
effect.name = "Wiggle active?"

effect = controllerLayer.Effects.addProperty("Checkbox Control");
effect.name = "Eyes closed!"

effect = controllerLayer.Effects.addProperty("Checkbox Control");
effect.name = "Eyes closed?"
effect.property("Checkbox").setValueAtTime(0, 0)
effect.property("Checkbox").setValueAtTime(0.5, 1)
effect.property("Checkbox").setValueAtTime(0.6, 0)
effect.property("Checkbox").setValueAtTime(1.2, 1)
effect.property("Checkbox").setValueAtTime(1.3, 0)
effect.property("Checkbox").expression = eyesExpression


// Adding character layer
var characterLayer = activeComp.layers.addNull(activeComp.duration);
characterLayer.name = "- character";
characterLayer.moveAfter(controllerLayer)
characterLayer.enabled = false

// Adding body layer
var bodyLayer = activeComp.layers.addNull(activeComp.duration);
bodyLayer.name = "-- body";
bodyLayer.parent = characterLayer
bodyLayer.moveAfter(characterLayer)
bodyLayer.transform.rotation.expression = wiggleExpression

// Adding head layer
var headLayer = activeComp.layers.addNull(activeComp.duration);
headLayer.name = "--- head";
headLayer.parent = bodyLayer
headLayer.moveAfter(bodyLayer)
headLayer.transform.rotation.expression = wiggleExpression

// Adding face layer
var faceLayer = activeComp.layers.addNull(activeComp.duration);
faceLayer.name = "---- face";
faceLayer.parent = headLayer
faceLayer.moveAfter(headLayer)

faceLayer.selected = false
bodyLayer.selected = true



app.endUndoGroup()
