import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Debug from './Debug';

describe('Debug', () => {
  it('should match its snapshot', () => {
    const element = shallow(<Debug />);
    expect(toJson(element)).toMatchSnapshot();
  });

  it('should render with label', () => {
    const label = 'Lorem ipsum';
    const element = shallow(<Debug>{label}</Debug>);
    expect(element.text()).toBe(label);
  })
});
