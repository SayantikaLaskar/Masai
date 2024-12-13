// Get DOM elements
const noteArea = document.getElementById('noteArea');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const clearBtn = document.getElementById('clearBtn');

// Load notes from localStorage on page load
window.onload = () => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    noteArea.value = savedNotes;
  }
};

// Save notes to localStorage
saveBtn.addEventListener('click', () => {
  const notes = noteArea.value;
  if (notes.trim() !== '') { // Validate for empty notes
    localStorage.setItem('notes', notes);
    alert('Notes saved successfully!');
  } else {
    alert('Please enter some notes.');
  }
});

// Load notes from localStorage
loadBtn.addEventListener('click', () => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    noteArea.value = savedNotes;
  } else {
    alert('No saved notes found.');
  }
});

// Clear notes from localStorage
clearBtn.addEventListener('click', () => {
  localStorage.removeItem('notes');
  noteArea.value = '';
  alert('Notes cleared successfully!');
});
