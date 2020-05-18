import { useContext, useEffect, useState } from 'react';
import { FormValuesContext } from '../Contexts/FormValuesContext';
import { UserContext } from '../Contexts/UserContext';
import { FormErrorsContext } from '../Contexts/FormErrorsContext';
import { GlobalContext } from '../Contexts/GlobalContext';
import API from '../Utilities/API';

const useApi = (apiFunction) => {
  const { formValues, setFormValues } = useContext(FormValuesContext);
  const { formErrors, setFormErrors } = useContext(FormErrorsContext);
  const { user, setUser } = useContext(UserContext);
  const { global, setGlobal } = useContext(GlobalContext);

  const [data, setData] = useState(null);

  const clearForm = () => {
    setGlobal({ ...global, isSubmitting: false });
    let tempValues = { ...formValues };
    // let tempErrors = { ...formErrors };

    // for each key in the form values array, set the value to null
    for (let [key, value] of Object.entries(tempValues)) {
      tempValues[key] = null;
    }
    setFormValues({});

    // for each key in the form errors array, set the value to null
    // for (let [key, value] of Object.entries(tempErrors)) {
    //   tempErrors[key] = null;
    // }
    setFormErrors({});
  };

  const executeCallback = (apiFunction) => {
    switch (apiFunction) {
      case 'authenticate':
        if (formErrors.email || formErrors.password) {
          return 0;
        }
        API.authenticate({
          email: formValues.email,
          password: formValues.password,
        });
        break;
      case 'register':
        if (
          formErrors.firstName ||
          formErrors.lastName ||
          formErrors.email ||
          formErrors.password ||
          formErrors.passwordConfirmation
        ) {
          return 0;
        }
        API.createUser({
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          password: formValues.password,
          passwordConfirmation: formValues.passwordConfirmation,
        });
        break;
    }
  };

  useEffect(() => {
    executeCallback(apiFunction)
      .then((res) => {
        if (apiFunction == 'authenticate' && res.status === 200) {
          clearForm();
          setUser({ ...user, isAuthenticated: true });
        }
        if (apiFunction == 'register' && res.status === 200) {
          clearForm();
          setUser({ ...user, isCreated: true });
        }
        setData(res.data);
        setGlobal({ ...global, isLoading: false });
      })
      .catch(() => {
        setGlobal({
          ...global,
          error: 'Something went wrong',
          isLoading: false,
        });
      });
  }, [apiFunction, params]);

  return [data];
};

export default useApi;
