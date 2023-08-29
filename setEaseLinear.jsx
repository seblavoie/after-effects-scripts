app.beginUndoGroup("set ease linear")

var _setEaseLinear = function() {
    var activeComp = app.project.activeItem

    for (var i = 0; i < activeComp.selectedProperties.length; i++) {
        var myProp = activeComp.selectedProperties[i];
        // alert(myProp.name)
        for (var key = 0; key < myProp.selectedKeys.length; key++) {
            var easeIn = new KeyframeEase(0, 33.3);
            var easeOut = new KeyframeEase(0, 33.3);
            alert(easeIn)
            myProp.setTemporalEaseAtKey(key + 1, [easeIn], [easeOut])
        }
    }
}

_setEaseLinear()

app.endUndoGroup()