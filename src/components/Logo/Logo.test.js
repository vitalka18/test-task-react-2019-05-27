import { shallow } from 'enzyme/build';
import Logo from './Logo';
import React from 'react';

it('renders with proper title', () => {
  const wrapper = shallow(<Logo title="test" />);

  expect(wrapper.text()).toContain('test');

  wrapper.unmount();
});
