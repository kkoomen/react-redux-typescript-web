import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import { debugState } from '../../../reducers/Debug';
import { Debug } from '../';

const mockStore = configureStore();
const initialStoreState = {};

let store: any;
beforeEach(() => {
  store = mockStore({
    debug: debugState,
  });
});

describe('Debug component', () => {
  it('should match its snapshot by default', () => {
    const element = mount(
      <Provider store={store}>
        <Debug />
      </Provider>
    );
    expect(toJson(element)).toMatchSnapshot();
  });
});
