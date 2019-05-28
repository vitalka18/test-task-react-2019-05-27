import { shallow } from 'enzyme/build';
import React from 'react';

import Layout from './Layout';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

it('renders without crashing', () => {
  const wrapper = shallow(<Layout />);

  expect(wrapper.find(Header).length).toEqual(1);
  expect(wrapper.find(Footer).length).toEqual(1);

  wrapper.unmount();
});
