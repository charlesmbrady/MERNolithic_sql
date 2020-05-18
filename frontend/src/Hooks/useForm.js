import { useContext, useEffect } from 'react';
import { FormValuesContext } from '../Contexts/FormValuesContext';
import { UserContext } from '../Contexts/UserContext';
import { FormErrorsContext } from '../Contexts/FormErrorsContext';
import { GlobalContext } from '../Contexts/GlobalContext';
import API from '../Utilities/API';
import validate from '../Utilities/formValidations';
import useApi from './useApi';

const useForm = (callback) => {
  const { formValues, setFormValues } = useContext(FormValuesContext);
  const { formErrors, setFormErrors } = useContext(FormErrorsContext);
  const { user, setUser } = useContext(UserContext);
  const { global, setGlobal } = useContext(GlobalContext);
  // const { data } = useApi(callback);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setGlobal({ ...global, isSubmitting: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    if (global.isSubmitting) {
      useApi(callback);
    }
  }, [formErrors]);

  return {
    handleChange,
    handleSubmit,
    formValues,
    formErrors,
  };
};

export default useForm;
