const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    });

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        listItem.style.textDecoration = 'line-through';
    });

    listItem.appendChild(deleteBtn);
    listItem.appendChild(completeBtn);

    taskList.appendChild(listItem);
    taskInput.value = ''; 
});
