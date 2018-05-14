// Here we extract logic out of the component into a pure function

// We can test pure functions withoute enzyme (and are generally easy to test).

// The function used to have no arguments and rely on props, but now it must have some.
export const getWidthAsPercentOfTotalWidth = (percent, totalWidth) =>
  parseInt(totalWidth * (percent / 100), 10);
