import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TrelloCloneApp from './TrelloCloneApp';
import configureStore from '../store/configureStore';

const store = configureStore();

const StoreWrapper = (props) => {
  return(
    <Provider store={store}>
      <TrelloCloneApp />
    </Provider>
  );
}

export default StoreWrapper;
