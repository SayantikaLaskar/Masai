// 1. Select the <h1> element by its id and change its text content to "Welcome to the DOM World!"
const heading = document.querySelector('h1'); 
heading.textContent = "Welcome to the DOM World!";

// 2. Select all <p> elements and set their text color to blue
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue"; 
}

// 3. Use querySelector to select the first <div> with the class container and change its background color to yellow
const container = document.querySelector('.container');
container.style.backgroundColor = "yellow";
