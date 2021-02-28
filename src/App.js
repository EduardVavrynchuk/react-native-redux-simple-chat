import React from 'react';
import {Provider} from 'react-redux';
import Chat from './screens/Chat';

import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  );
}

export default App;