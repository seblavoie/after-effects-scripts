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