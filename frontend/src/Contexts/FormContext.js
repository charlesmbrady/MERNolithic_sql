import { createContext } from 'react';

export const FormContext = createContext({
  // All field names go here
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
