/**
 * This script will copy the current composition's name to clipboard and add > to it.
 * It will open open the pre-compose dialog. 
 * 
 * This helps when using my composition naming system for After Effects (http://keyframed.tv/a-composition-naming-system-for-after-effects/)
 */

copyToClipboard(_compName + " > ")

function copyToClipboard(string) {
	var cmd;
	string = (typeof string === 'string') ? string : string.toString();
	cmd = 'printf "' + string + '" | pbcopy';
	system.callSystem(cmd);
}

app.executeCommand(2071);