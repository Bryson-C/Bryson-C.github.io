
function loadTerminalColorScheme() {
	const colors = [
		'bg-col-black','bg-col-red', 'bg-col-green',
		'bg-col-yellow', 'bg-col-orange', 'bg-col-purple',
		'bg-col-blue', 'bg-col-white'
	];
	let colorSchemeContainer = document.getElementById("color-scheme");

	for (let color of colors) {
		let colorSample =  document.createElement('div');
		colorSample.classList.add('color-scheme-sample');
		colorSample.classList.add(color);
		colorSchemeContainer.appendChild(colorSample);
	}
}
loadTerminalColorScheme();

function logToConsoleWindow(string) {
	let cnsl = document.getElementById("header-command-line-emulator");
	
	// first, remove the cursor, it should always be the last element
	cnsl.removeChild(cnsl.getElementsByClassName("blinking-cursor")[0]);

	// add a new line
	cnsl.appendChild(document.createElement("br"));

	let prefix0 = document.createElement("span");
	prefix0.classList.add('col-green');
	prefix0.innerText = "bcrader@portfolio ";

	let prefix1 = document.createElement("span");
	prefix1.classList.add('col-blue');
	prefix1.innerText = "~/dev/main $ ";

	let msg = document.createElement("span");
	msg.innerText = string;

	cnsl.appendChild(prefix0);
	cnsl.appendChild(prefix1);
	cnsl.appendChild(msg);

	// last, add the cursor back
	let cursor = document.createElement("span");
	cursor.classList.add('blinking-cursor');
	cursor.innerText = "|";
	cnsl.appendChild(cursor);

	cnsl.scrollTop = cnsl.scrollHeight;

}

let selectedFile = "";
function selectFileFromBrowser(filename) {
	if (selectedFile == filename) return;
	if (selectedFile != "") logToConsoleWindow(`cd ..`);

	selectedFile = filename;
	logToConsoleWindow(`cd ${filename}`);
	
	let previewNameHeader = document.getElementById("preview-header-name");
	previewNameHeader.innerText = filename;
}