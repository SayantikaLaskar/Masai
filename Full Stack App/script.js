const baseUrl = 'https://your-glitch-project-url.glitch.me'; // Replace with your actual Glitch project URL

// User data (replace with secure storage)
let currentUser = null;

// Navbar Handling
const navbar = document.getElementById('navbar');

// ... (Signup, Login, Logout functions) ...

function displayTodos() {
  const appContainer = document.getElementById('app-container');
  appContainer.innerHTML = '';

  if (currentUser) {
    // Fetch todos for the current user
    fetch(`${baseUrl}/todos?email=${currentUser.email}`)
      .then(response => response.json())
      .then(todos => {
        todos.forEach(todo => {
          const todoItem = document.createElement('li');
          todoItem.textContent = todo.text;
          appContainer.appendChild(todoItem);
        });
      })
      .catch(error => console.error('Error fetching todos:', error));
  } else {
    appContainer.innerHTML = 'Please login to view todos.';
  }
}

// ... (Signup, Login, Logout functions) ...

// Example Signup Function
function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => {
    if (response.ok) {
      alert('Signup successful!');
      // Redirect to login page
      window.location.href = 'login.html';
    } else {
      alert('Signup failed. Please try again.');
    }
  })
  .catch(error => console.error('Signup error:', error));
}

// ... (Login, Logout, Todo CRUD functions) ...

// Initial page load
if (window.location.pathname === '/index.html') {
  displayTodos();
}
