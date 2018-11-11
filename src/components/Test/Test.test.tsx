import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Test from './Test';

describe('Test', () => {
  it('should match its snapshot', () => {
    const element = shallow(<Test />);
    expect(toJson(element)).toMatchSnapshot();
  });
});
