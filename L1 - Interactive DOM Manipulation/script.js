const colorInput = document.getElementById('colorInput');
const textInput = document.getElementById('textInput');
const changeBackgroundBtn = document.getElementById('changeBackground');
const updateTextButton = document.getElementById('updateText');
const contentDiv = document.getElementById('content');

changeBackgroundBtn.addEventListener('click', () => {
    const color = colorInput.value;
    if (isValidColor(color)) {
        contentDiv.style.backgroundColor = color;
    } else {
        alert("Invalid color name!");
    }
});

updateTextButton.addEventListener('click', () => {
    const newText = textInput.value;
    if (newText !== "") {
        contentDiv.textContent = newText;
    } else {
        alert("Please enter some text!");
    }
});

function isValidColor(color) {
    // Basic color validation (you can add more robust checks)
    const validColors = ["red", "green", "blue", "black", "white", "yellow", "orange", "purple"]; 
    return validColors.includes(color.toLowerCase());
}
