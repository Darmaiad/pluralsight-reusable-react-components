import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';
// This should be probably run inside a configuration file, not here
/* eslint-disable no-unused-vars */
import configure from './../../../config/jest/enzymesetup';

describe('Progress Bar Unit Test', () => {
  test('getWidthAsPercentOfTotalWidth should return 250 with a total width of 500 and a percent of 50', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500} />);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });
});
