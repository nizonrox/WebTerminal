// Declare array for command history & prefixes
let InputHistory = [];
let ERRORLEVEL = "0";

const prefixes = {
    None: '',
    System: '[SYSTEM]',
    User: 'C:\\>'
};

const colorMap = {
    '0': 'black',
    '1': 'blue',
    '2': 'green',
    '3': 'aqua',
    '4': 'red',
    '5': 'purple',
    '6': 'yellow',
    '7': 'white',
    '8': 'gray',
    '9': 'lightblue',
    'A': 'lightgreen',
    'B': 'lightaqua',
    'C': 'lightred',
    'D': 'lightpurple',
    'E': 'lightyellow',
    'F': 'brightwhite'
};


// Make references to HTML objects
const userInput = document.getElementById('CLI_input');
const terminalContainer = document.getElementById('Terminal');

function addToTerminal(text, prefixType = 'None') {
    const prefix = prefixes[prefixType] || prefixes.None;
    // Create Div element and a p tag for text
    const terminalDiv = document.createElement('div');
    const terminalText = document.createElement('p');
    terminalDiv.classList.add('Terminal_Item');
    terminalText.textContent = `${prefix} ${text}`;

    // Append the div and p tag
    terminalDiv.appendChild(terminalText);
    terminalContainer.appendChild(terminalDiv);
}

function command_ClearTerminal() {
    // Clear the inner HTML of the terminalContainer
    terminalContainer.innerHTML = '';
}

function command_Version(num) {
    // Output version data to terminal terminalContainer
    if (num === "0") {
        addToTerminal(userInput.value, "User");
    }
    addToTerminal('Browser Terminal [Version 0.0.0.1]');
    addToTerminal('(c) Nizonrox Corporation. All rights reserved.');
}

function command_Echo(text) {
    // Add the version text to the terminalContainer
    addToTerminal(userInput.value, "User");
    addToTerminal(text);
}

function command_Color(newColorCode) {
    const elements = document.querySelectorAll('.CLI_style');

    if (newColorCode.length === 1) {
        const newColor = colorMap[newColorCode.toUpperCase()];
        elements.forEach((element) => {
            element.style.color = newColor;
        });
    } else if (newColorCode.length === 2) {
        // Handle text color
        // Handle background color
        console.log("Double color");
    }
}



// Event listener for handeling keydown presses
userInput.addEventListener('keydown', (event) => {

    // "Enter" keydown event
    if (event.key === 'Enter') {
        const inputText = userInput.value.toLowerCase();

        if (inputText) {
            if (inputText === 'clear' || inputText === 'cls') {
                command_ClearTerminal();
            } else if (inputText === 'cmd') {
                command_Version("0");
            } else if (inputText.startsWith('echo ')) {
                const trim_echo_input = userInput.value.slice(5);
                command_Echo(trim_echo_input);
            } else if (inputText.startsWith('color ')) {
                const trim_color_input = userInput.value.slice(6);
                command_Color(trim_color_input);
            }
            // Clear Command line input
            userInput.value = '';
        }
        if (!inputText) {
            console.log("New line");
            // Make new line in TerminalHistory
        }
    }
});

// Print version text on startup
command_Version("1");