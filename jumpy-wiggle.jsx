app.beginUndoGroup("Add character")

var activeComp = app.project.activeItem;
var selectedLayer = activeComp.selectedLayers[0];

var effect = selectedLayer.Effects.addProperty("Slider Control");
effect.name = "Wiggle fps"
effect.property("Slider").setValue(3)

var effect = selectedLayer.Effects.addProperty("Slider Control");
effect.name = "Wiggle amount position"
effect.property("Slider").setValue(1)
selectedLayer.transform.position.expression = 'fps=effect("Wiggle fps")("Slider");\
amount=effect("Wiggle amount position")("Slider");\
value + value - wiggle(fps,amount,octaves = 1, amp_mult = 0.5,(Math.round(time*fps))/fps);'

var effect = selectedLayer.Effects.addProperty("Slider Control");
effect.name = "Wiggle amount scale"
effect.property("Slider").setValue(1)
selectedLayer.transform.scale.expression = 'fps=effect("Wiggle fps")("Slider");\
amount=effect("Wiggle amount scale")("Slider");\
w = wiggle(fps,amount,octaves = 1, amp_mult = 0.5,(Math.round(time*fps))/fps);\
[w[0], w[0]]'

var effect = selectedLayer.Effects.addProperty("Slider Control");
effect.name = "Wiggle amount rotation"
effect.property("Slider").setValue(1)
if(selectedLayer.transform.rotation) {
  selectedLayer.transform.rotation.expression = 'fps=effect("Wiggle fps")("Slider");\
  amount=effect("Wiggle amount rotation")("Slider");\
  wiggle(fps,amount,octaves = 1, amp_mult = 0.5,(Math.round(time*fps))/fps);'
} else {
  selectedLayer.transform.zRotation.expression = 'fps=effect("Wiggle fps")("Slider");\
  amount=effect("Wiggle amount rotation")("Slider");\
  wiggle(fps,amount,octaves = 1, amp_mult = 0.5,(Math.round(time*fps))/fps);'
}


app.endUndoGroup()
