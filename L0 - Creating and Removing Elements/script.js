// Get references to the buttons and the container div
const addButton = document.getElementById('addParagraph');
const removeButton = document.getElementById('removeParagraph');
const container = document.getElementById('container');

// Event listener for the "Add Paragraph" button
addButton.addEventListener('click', () => {
  // Create a new paragraph element
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'This is a new paragraph.';

  // Append the new paragraph to the container
  container.appendChild(newParagraph);
});

// Event listener for the "Remove Last Paragraph" button
removeButton.addEventListener('click', () => {
  // Remove the last child element from the container
  if (container.lastChild) { 
    container.removeChild(container.lastChild);
  }
});
