import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.text()).toContain('Front-End Developer');

  wrapper.unmount();
});
