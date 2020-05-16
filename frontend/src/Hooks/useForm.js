import { useContext } from 'react';
import { FormValuesContext } from '../Contexts/FormValuesContext';
import { UserContext } from '../Contexts/UserContext';
import { FormErrorsContext } from '../Contexts/FormErrorsContext';
import API from '../Utilities/API';

const useForm = () => {
  const { formValues, setFormValues } = useContext(FormValuesContext);
  const { formErrors, setFormErrors } = useContext(FormErrorsContext);
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.target.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const clearForm = () => {
    let tempValues = { ...formValues };
    let tempErrors = { ...formErrors };

    // for each key in the form values array, set the value to null
    for (let [key, value] of Object.entries(tempValues)) {
      tempValues[key] = null;
    }
    setFormValues(tempValues);

    // for each key in the form errors array, set the value to null
    for (let [key, value] of Object.entries(tempErrors)) {
      tempErrors[key] = null;
    }
    setFormErrors(tempErrors);
  };

  const authenticateUser = () => {
    API.authenticate({
      email: formValues.email,
      password: formValues.password,
    }).then((res) => {
      if (res.status === 200) {
        clearForm();
        setUser({ ...user, isAuthenticated: true });
      }
    });
  };

  const registerUser = () => {
    API.createUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      passwordConfirmation: formValues.passwordConfirmation,
    }).then((res) => {
      if (res.status === 200) {
        setUser({ ...user, isCreated: true });
        clearForm();
      }
    });
  };

  return {
    handleChange,
    handleSubmit,
    formValues,
    formErrors,
    authenticateUser,
    registerUser,
  };
};

export default useForm;
