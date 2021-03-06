var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');
var msgDiv = document.querySelector('#msg');
var userEmailSpan = document.querySelector('#user-email');
var userPasswordSpan = document.querySelector('#user-password');

function renderLastRegistered() {
    // TODO: Retrieve the last email and password from localStorage
    var savedEmails = localStorage.getItem("email");  
    // TODO: If they are null, return early from this function
    if (!savedEmails) {
      return false;
    }
    // TODO: Otherwise set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
    savedEmails = JSON.parse(savedEmails);
    userEmailSpan.textContent = savedEmails.email;
    userPasswordSpan.textContent = savedEmails.password;
  
}

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

signUpButton.addEventListener('click', function(event) {
  event.preventDefault();

  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    var object = {
      email: email,
      password: password
    }
    // TODO: Save email and password to localStorage
      localStorage.setItem("email", JSON.stringify(object));

      renderLastRegistered();

    // TODO: Render the last registered email and password
    //userEmailSpan.textContent = email;
    //userPasswordSpan.textContent = password;
  }
});
