/* eslint-env jest */
import React from 'react';
import moment from 'moment';
import {
  mount,
} from '../../enzyme';

import Details from '../Details';


describe('Details Tests', () => {
  it('Details component to be defined', () => {
    const weather = {
      id: '500',
      main: 'Rain',
      description: 'light rain',
      icon: '10d',
    };
    const date = moment(1532347200 * 1000);
    const humidity = '99';
    const temp = '67';

    const wrapper = mount(React.createElement(Details, Object.assign({}, {
      weather,
      date,
      humidity,
      temp,
    })));
    expect(wrapper).toBeDefined();
  });
});
