/* eslint-env jest */
import React from 'react';

import { shallow } from '../../enzyme';

import Form from '../Form';


describe('Form Tests', () => {
  it('Form component to be defined', () => {
    const wrapper = shallow(React.createElement(Form));
    expect(wrapper).toBeDefined();
  });
  it('Form to have h2 tag', () => {
    const wrapper = shallow(React.createElement(Form));
    expect(wrapper.find('h2')).toHaveLength(2);
  });
  it('Form to have 2 input tags', () => {
    const wrapper = shallow(React.createElement(Form));
    expect(wrapper.find('input')).toHaveLength(2);
  });
  it('Form to have country input tag to contain IN', () => {
    const wrapper = shallow(React.createElement(Form));
    expect(wrapper.find('#country-value').html()).toContain('IN');
  });
  it('Form to have city input tag to contain IN', () => {
    const wrapper = shallow(React.createElement(Form));
    expect(wrapper.find('#city-value').html()).toContain('Bengaluru');
  });

});
