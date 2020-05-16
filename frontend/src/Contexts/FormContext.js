import { createContext } from 'react';

export const FormContext = createContext({
  // All field names go here
  // This is just for reference, not functional
  // Functional piece is in App.js

  firstName: {
    input: null,
    error: null,
  },
  lastName: {
    input: null,
    error: null,
  },
  email: {
    input: null,
    error: null,
  },
  password: {
    input: null,
    error: null,
  },
  confirmPassword: {
    input: null,
    error: null,
  },
});
