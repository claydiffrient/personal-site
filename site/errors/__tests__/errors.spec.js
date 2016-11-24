/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { FourOhFour, FiveHundred } from '../index';

describe('Error Tests', () => {
  it('has a proper 404', () => {
    const component = renderer.create(
      <FourOhFour />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has a proper 500', () => {
    const component = renderer.create(
      <FiveHundred />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
