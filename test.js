const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username and password are valid
  // Here you can add your own logic for authentication
  if (username === 'admin' && password === 'password@123') {
    // Redirect to dashboard or homepage
    window.location.href = '/success.html';
  } 
  
  if (username != 'admin') {
    alert('Invalid username');
  }

  if (password != 'pasword@123'){
    alert('Invalid password');
  }

  else {
    // Display error message
    alert('Invalid username and password');
  }
});
