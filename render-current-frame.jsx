var _renderCurrentFrame = function(comp) {

  system.callSystem("cd ~/Desktop && mkdir frames && open .");

  var _render = app.project.renderQueue.items.add(comp);

  _render.outputModules[1].applyTemplate("PNG Sequence");
  var _filePath = "~/Desktop/frames/" + _getFileName(comp.name) + "_[startFrame]"
  var _file = File(_filePath)
  _render.outputModules[1].file = _file
  _render.timeSpanStart = comp.time
  _render.timeSpanDuration = comp.frameDuration

  app.project.renderQueue.render()

  system.callSystem('cd ~/Desktop/frames && open . && for file in *.png*; do mv "$file" "${file/.png*/.png}"; done');
}

function _getFileName(compName) {
  var _name = app.project.file.name || "render";
  _name = _name.replace(/[0-9]+\.aep/, compName)
  _name = _name.replace("# ","").toLowerCase()
  _name = _name.replace("_animation", "")
  _name = _name.replace("-> ## ", "_")
  _name = _name.replace(" ","-")
  return _name
}
_renderCurrentFrame(app.project.activeItem);