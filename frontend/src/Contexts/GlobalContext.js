import { createContext } from 'react';

export const GlobalContext = createContext({
  isSubmitting: false,
  isLoading: false,
});
