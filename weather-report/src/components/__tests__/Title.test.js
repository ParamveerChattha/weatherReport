/* eslint-env jest */
import React from 'react';

import { shallow } from '../../enzyme';

import Title from '../Title';


describe('Title Tests', () => {
  it('Title component to be defined', () => {
    const wrapper = shallow(React.createElement(Title));
    expect(wrapper).toBeDefined();
  });
  it('Title to have h1 tag', () => {
    const wrapper = shallow(React.createElement(Title));
    expect(wrapper.find('h1')).toHaveLength(1);
  });
  it('Title to have a \'p\' tag ', () => {
    const wrapper = shallow(React.createElement(Title));
    expect(wrapper.find('p')).toHaveLength(1);
  });
  it('Title to have a h1 tag values atmos', () => {
    const wrapper = shallow(React.createElement(Title));
    expect(wrapper.find('h1').text()).toEqual('atmos');
  });
  it('Title to have a p tag values \'the weather forecast app\'', () => {
    const wrapper = shallow(React.createElement(Title));
    expect(wrapper.find('p').text()).toEqual('the weather forecast app...');
  });
});
