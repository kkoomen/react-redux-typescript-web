import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Debug from '../';

describe('Debug', () => {
  it('should match its snapshot', () => {
    const element = shallow(<Debug />);
    expect(toJson(element)).toMatchSnapshot();
  });
});
