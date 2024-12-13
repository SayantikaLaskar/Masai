const button = document.getElementById('addItem');
const list = document.getElementById('myList');

button.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';

    // Apply styling based on sequence number
    const listItems = list.querySelectorAll('li');
    const index = listItems.length;

    if (index % 2 === 0) { 
        newItem.style.fontStyle = 'italic';
        newItem.style.color = 'red';
    } else {
        newItem.style.fontWeight = 'bold';
        newItem.style.color = 'blue';
    }

    list.appendChild(newItem);
});
