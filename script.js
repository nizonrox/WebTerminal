// Declare array for command prompt history
let TerminalHistory = [];
let InputHistory = [];


// Make references to HTML objects
const userInput = document.getElementById('CLI_input');
const terminalContainer = document.getElementById('Terminal');




// Handle input
userInput.addEventListener('keydown', (event) => {
	
	// Handle "Enter" key
    if (event.key === 'Enter') {
        const inputText = userInput.value.toLowerCase();

        if (inputText) {
		console.log("Running command");
		// Handle commands
        }
		if (!inputText) {
		console.log("New line");
		// Make new line in TerminalHistory
		}
	}
});

