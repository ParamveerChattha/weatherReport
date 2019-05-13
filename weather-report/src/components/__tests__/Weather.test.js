/* eslint-env jest */
import React from 'react';


import {
  render,
} from '../../enzyme';
import Weather from '../Weather';

describe('Weather Tests', async () => {
  it('Weather component to be defined', () => {
    const wrapper = render(React.createElement(Weather));
    expect(wrapper).toBeDefined();
  });
});
