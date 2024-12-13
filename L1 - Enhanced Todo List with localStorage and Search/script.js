const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const searchInput = document.getElementById('searchInput');
const taskList = document.getElementById('taskList');

let tasks = [];

// Load tasks from localStorage on page load
window.onload = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
};

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = {
            id: Date.now(), // Unique ID
            text: taskText,
            completed: false
        };
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        taskInput.value = '';
    }
});

searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchTerm));
    renderTasks(filteredTasks);
});

function renderTasks(filteredTasks = tasks) {
    taskList.innerHTML = ''; // Clear existing list

    filteredTasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;

        if (task.completed) {
            listItem.classList.add('completed');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.completed ? 'Incomplete' : 'Complete';
        toggleBtn.addEventListener('click', () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        listItem.appendChild(deleteBtn);
        listItem.appendChild(toggleBtn);

        taskList.appendChild(listItem);
    });
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
