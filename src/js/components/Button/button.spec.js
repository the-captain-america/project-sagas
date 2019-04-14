
import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('should render one <Button /> component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.other-class').exists()).toBe(false);
  });
});
