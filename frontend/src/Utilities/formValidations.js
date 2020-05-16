export default function validateForm(values) {
  let errors = {};

  // Email
  if (!values.email) {
    errors.email = 'Email Address is required';
  }

  // First Name
  if (!values.firstName) {
    errors.firstName = 'First Name is required';
  }

  // Last Name
  if (!values.lastName) {
    errors.lastName = 'Last Name is required';
  }

  // Password
  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Password Confirmation is required';
  }

  if (
    values.password &&
    values.passwordConfirmation &&
    values.password != values.passwordConfirmation
  ) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  return errors;
}
