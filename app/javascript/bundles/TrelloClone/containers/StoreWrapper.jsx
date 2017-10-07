import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import TrelloCloneApp from './TrelloCloneApp';
import configureStore from '../store/configureStore';

const store = configureStore();

const StoreWrapper = (props) => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <TrelloCloneApp />
      </BrowserRouter>
    </Provider>
  );
}

export default StoreWrapper;
