/**
 * first-state.snapshot.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 15.09.2016
 */

/* eslint-env jest */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '../src';
import content from './CONTENT.json';

describe('Menu with recursive content', () => {
  // Create test component
  const component = renderer.create(<Menu content={content} />);

  it('looks like without any interact', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
