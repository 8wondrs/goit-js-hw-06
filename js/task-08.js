const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const emailInput = loginForm.email.value;
  const passwordInput = loginForm.password.value;

  if (emailInput === '' || passwordInput === '') {
    alert('Будь ласка, заповніть всі поля');
  } else {
    const formData = {
      email: emailInput,
      password: passwordInput,
    };
    console.log(formData);
    loginForm.reset();
  }
});
