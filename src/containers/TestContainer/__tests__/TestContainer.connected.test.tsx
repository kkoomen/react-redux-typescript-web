import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import { testContainerState } from '../../../reducers/TestContainer';
import { TestContainer } from '../';

const mockStore = configureStore();
const initialStoreState = {};

let store: any;
beforeEach(() => {
  store = mockStore({
    testContainer: testContainerState,
  });
});

describe('TestContainer container', () => {
  it('should match its snapshot by default', () => {
    const element = mount(
      <Provider store={store}>
        <TestContainer />
      </Provider>
    );
    expect(toJson(element)).toMatchSnapshot();
  });
});
