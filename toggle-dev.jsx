/**
 * Will switch on and off the checkbox control place on 
 * layer named Controller in composition named # Main
 *
 * Works with this technique: http://keyframed.tv/how-to-easily-toggle-layers-visibility-with-a-checkbox-control-and-a-custom-script-in-after-effects/
 */

var _comp;
for (var i = 1; i <= app.project.numItems; i ++) {
    if ((app.project.item(i) instanceof CompItem) && (app.project.item(i).name === '# Main')) {
        _comp = app.project.item(i);
        break;
    }
}

var _checkbox = _comp.layer("Controller").Effects.property("Dev?")("Checkbox");
var _newValue = _checkbox.value == 1 ? 0 : 1;
_checkbox.setValue(_newValue);