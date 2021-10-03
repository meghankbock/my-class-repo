import React, { createContext, useContext } from 'react';
import { useBookReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useBookReducer({
    books: [],
    currentBook: {}
  });
  // console.log('this is state ' + state);
  console.log('this is state ', state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
