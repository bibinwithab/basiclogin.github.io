const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username and password are valid  -- valid username: "admin"; valid password: "password@123"
  // Here you can add your own logic for authentication
  if (username === 'admin' && password === 'password@123') {
    // Redirect to dashboard or homepage
    window.location.href = '/success.html';
  } 
  else {
    // Display error message
    alert('Invalid username and password');
  }
});
