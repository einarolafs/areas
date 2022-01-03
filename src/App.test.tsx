import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { App } from './App';

import { Provider } from 'react-redux'
import { Store } from 'redux';

const mockStore = configureStore([]);

describe('App', () => { 
  let store: Store;
  
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
  });

  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App areas={{}} />
      </Provider>
    );
  });
})
