import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TestUnconnected } from '../';

describe('TestUnconnected component', () => {
  it('should match its snapshot by default', () => {
    const element = shallow(<TestUnconnected />);
    expect(toJson(element)).toMatchSnapshot();
  });
});
