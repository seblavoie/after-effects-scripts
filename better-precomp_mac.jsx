var _compName = app.project.activeItem.name;
copyToClipboard(_compName + " > ")

function copyToClipboard(string) {
	var cmd;
	string = (typeof string === 'string') ? string : string.toString();
	cmd = 'printf "' + string + '" | pbcopy';
	system.callSystem(cmd);
}

app.executeCommand(2071);