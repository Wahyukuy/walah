const output = document.getElementById('output');
const messages = [
    "> Initializing Demon King Protocol...",
    "> Accessing hidden repositories...",
    "> Status: <span class='highlight'>Online</span>",
    "> User: <span class='highlight'>YourName</span>",
    "> Speciality: Fullstack Domination & System Architecture",
    "> 'I don't write code, I dictate reality.'",
    "> Type 'help' to see my powers..."
];

let i = 0;

function typeWriter(text, index, cb) {
    if (index < text.length) {
        const char = text.charAt(index);
        const lastLine = output.lastElementChild;
        lastLine.innerHTML += char;
        setTimeout(() => typeWriter(text, index + 1, cb), 30);
    } else {
        cb();
    }
}

function addNewLine() {
    const div = document.createElement('div');
    div.className = 'line';
    output.appendChild(div);
}

function startBoot() {
    if (i < messages.length) {
        addNewLine();
        typeWriter(messages[i], 0, () => {
            i++;
            setTimeout(startBoot, 500);
        });
    }
}

window.onload = startBoot;
