import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import { testState } from '../../../reducers/Test';
import { Test } from '../';

const mockStore = configureStore();
const initialStoreState = {};

let store: any;
beforeEach(() => {
  store = mockStore({
    test: testState,
  });
});

describe('Test component', () => {
  it('should match its snapshot by default', () => {
    const element = mount(
      <Provider store={store}>
        <Test />
      </Provider>
    );
    expect(toJson(element)).toMatchSnapshot();
  });
});
