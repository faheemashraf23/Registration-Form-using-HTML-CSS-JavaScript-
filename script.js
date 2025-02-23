document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let valid = true;
  




// Name Validation
const name = document.getElementById('name').value;
if (name === '' || !/^[a-zA-Z ]+$/.test(name)) {
  document.getElementById('NameError').textContent = 'Please enter a valid name.';
  valid = false;
}
else{
  document.getElementById('NameError').textContent='';
}








// Email Validation
const email = document.getElementById('email').value;
if (email === '' || !/^[a-zA-Z ]+$/.test(email)) {
  document.getElementById('EmailError').textContent = 'Please enter a valid email.';
  valid = false;
}
else{
   document.getElementById('EmailError').textContent='';
}






// Password Validation
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('ConfirmPassword').value;
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('ConfirmPasswordError');
if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
  passwordError.textContent = 'Password must be at least 6 characters and include uppercase, lowercase, and a number.';
  valid = false;
} 
else {
  passwordError.textContent = '';
}

if (password !== ConfirmPassword) {
  confirmPasswordError.textContent = 'Passwords do not match.';
  valid = false;
} 
else {
  confirmPasswordError.textContent = '';
}






// Phone Validation
const phone = document.getElementById('phone').value;
if (phone === '' || !/^\d{10}$/.test(phone)) {
  document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
  valid = false;
} 
else {
  document.getElementById('phoneError').textContent = '';
}









// Date Validation
const dob = document.getElementById('dob').value;
if (dob === '') {
  document.getElementById('dobError').textContent = 'Please enter your date of birth.';
  valid = false;
} 
else {
  document.getElementById('dobError').textContent = '';
}









// Age Validation
const age = document.getElementById('age').value;
if (age < 20 || age > 100) {
  document.getElementById('AgeError').textContent = 'Please enter a valid age between 18 and 100.';
  valid = false;
} 
else {
  document.getElementById('AgeError').textContent = '';
}











// Gender Validation
const genderMale = document.getElementById('male').checked;
const genderFemale = document.getElementById('female').checked;
if (!genderMale && !genderFemale) {
  document.getElementById('GenderError').textContent = 'Please select your gender.';
  valid = false;
} 
else {
  document.getElementById('GenderError').textContent = '';
}








// Country Validation
const country = document.getElementById('country').value;
if (country === '') {
  document.getElementById('CountryError').textContent = 'Please select your country.';
  valid = false;
} 
else {
  document.getElementById('CcountryError').textContent = '';
}










// Message (Textarea) Validation
const message = document.getElementById('message').value;
if (message === '' || message.length < 10) {
  document.getElementById('MessageError').textContent = 'Please enter a message with at least 10 characters.';
  valid = false;
} 
else {
  document.getElementById('MessageError').textContent = '';
}






// Terms and Conditions Validation
const terms = document.getElementById('terms').checked;
if (!terms) {
  document.getElementById('TermsError').textContent = 'You must agree to the terms and conditions.';
  valid = false;
} 
else {
  document.getElementById('TermsError').textContent = '';
}









// Final Validation Check
if (valid) {
    alert('This Form submitted successfully!');
}
});

