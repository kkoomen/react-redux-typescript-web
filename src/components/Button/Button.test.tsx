import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from './Button';

describe('Button', () => {
  it('should match its snapshot', () => {
    const element = shallow(<Button />);
    expect(toJson(element)).toMatchSnapshot();
  });

  it('should render with label', () => {
    const label = 'Lorem ipsum';
    const element = shallow(<Button>{label}</Button>);
    expect(element.text()).toBe(label);
  })
});
