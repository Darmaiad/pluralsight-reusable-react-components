import { getWidthAsPercentOfTotalWidth } from './percentUtils';

describe('Progress Bar Unit Test', () => {
  test('percentUtils should return 250 with a total width of 500 and a percent of 50', () => {
    const width = getWidthAsPercentOfTotalWidth(50, 500);
    expect(width).toEqual(250);
  });
});
