import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import PasswordInput from './PasswordInput';

// Snapshot test
//  -  Snapshot tests will always pass the first time they run, since they take a snapshot of the component output.

test('Hides password quality bar by default', () => {
    const tree = renderer.create(<PasswordInput
        htmlId="test"
        name="test"
        onChange={() => { }}
        value="Uisi38#8iad" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('shows password quality when enabled and a password is entered', () => {
    const tree = renderer.create(<PasswordInput
      htmlId="test"
      name="test"
      onChange={() => {}}
      showQuality
      value="Uisi38#8iad" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

// Interaction test

