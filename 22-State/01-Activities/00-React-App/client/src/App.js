import React from 'react';

// Replace StoreProvider here and in App()
import { Provider } from './utils/GlobalState';
// Import the Redux store you created
import store from './utils/store';

function App() {
  return (
    <div className="m-5">
      <Provider store={store}>
        <h4>Here is the initialState:</h4>
        <div className="container">{console.log(store.getState())}</div>
      </Provider>
    </div>
  );
}

export default App;
