import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from './AppContainer';

describe('AppContainer Component', () => {
  it('should render one <Button /> component', () => {
    const wrapper = shallow(<AppContainer />);
    expect(wrapper.find('.other-class').exists()).toBe(false);
  });
});
