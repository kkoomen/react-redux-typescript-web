import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../';

describe('App', () => {
  it('should match its snapshot', () => {
    const element = shallow(<App />);
    expect(toJson(element)).toMatchSnapshot();
  });
});
