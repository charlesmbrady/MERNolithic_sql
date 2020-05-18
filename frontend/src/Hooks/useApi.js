import { useContext, useEffect, useState } from 'react';
import { FormValuesContext } from '../Contexts/FormValuesContext';
import { UserContext } from '../Contexts/UserContext';
import { FormErrorsContext } from '../Contexts/FormErrorsContext';
import { GlobalContext } from '../Contexts/GlobalContext';
import API from '../Utilities/API';

const useApi = (apiFunction, params) => {
  const { user, setUser } = useContext(UserContext);
  const { global, setGlobal } = useContext(GlobalContext);

  const [data, setData] = useState(null);

  const executeCallback = () => {
    // switch statment here...
  };

  useEffect(() => {
    apiFunction(params)
      .then(({ data }) => {
        setData(data);
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
