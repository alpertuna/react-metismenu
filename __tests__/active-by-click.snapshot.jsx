/**
 * @file active-by-click.snapshot.jsx
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 07.11.2016
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
  let tree = component.toJSON();
  const fakeEvent = {
    preventDefault() {},
  };

  it('visibles "Item 3" subcontainer when you click it', () => {
    // Manually click third link (tree > ul:0 > li:2 > a:0, "Item 3")
    tree.children[0].children[2].children[0].props.onClick(fakeEvent);
    // Re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('visibles "Sub Item 4" subcontainer when you click it', () => {
    // Manually click third link's sub menu (tree > ul:0 > li:2 > ul:1 > li:1 > a:0, "Sub Item 4")
    tree.children[0].children[2].children[1].children[1].children[0].props.onClick(fakeEvent);
    // Re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(
    'activates "Level 3 Item 1" and sets "has-active-child" classes of parents when you click it',
    () => {
      // Manually click level 3 link
      // (tree > ul:0 > li:2 > ul:1 > li:1 > ul:1 > li:0 > a:0, "Sub Item 4")
      tree
        .children[0].children[2]
        .children[1].children[1]
        .children[1].children[0]
        .children[0].props.onClick(fakeEvent);
      // Re-render
      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    },
  );
});
