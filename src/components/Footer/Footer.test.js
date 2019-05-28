import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders paragraph', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper.find('p').length).toEqual(1);

  wrapper.unmount();
});
