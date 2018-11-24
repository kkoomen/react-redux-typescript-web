import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TestContainerUnconnected } from '../';

describe('TestContainerUnconnected container', () => {
  it('should match its snapshot by default', () => {
    const element = shallow(<TestContainerUnconnected />);
    expect(toJson(element)).toMatchSnapshot();
  });
});
