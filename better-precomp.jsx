// this is the windows versrion

var _activeItem = app.project.activeItem;
var _compName = _activeItem.name;
var _compNewName = prompt("Enter new comp name", "animation");

// copyToClipboard(_compName + " > ");

// function copyToClipboard(string) {
//   var cmd;
//   string = typeof string === "string" ? string : string.toString();
//   cmd = 'printf "' + string + '" | pbcopy';
//   system.callSystem(cmd);
// }

var _layerIndicies = [];

for (var i = 0; i < _activeItem.selectedLayers.length; i++) {
  _layerIndicies.push(_activeItem.selectedLayers[i].index);
}

_activeItem.layers.precompose(
  _layerIndicies,
  _compName + " > " + _compNewName,
  true
);

// app.executeCommand(2071);
