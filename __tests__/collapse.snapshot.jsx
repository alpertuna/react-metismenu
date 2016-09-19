/**
 * collapse.snapshot.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 20.08.2016
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

  it('changes class and caret icon of "Item 3" when you click it', () => {
    // Manually click third link (tree > ul:0 > li:2 > a:0, "Item 3")
    tree.children[0].children[2].children[0].props.onClick(fakeEvent);
    // Re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('changes class and caret icon of "Sub Item 4" when you click it', () => {
    // Manually click third link's sub menu (tree > ul:0 > li:2 > ul:1 > li:1 > a:0, "Sub Item 4")
    tree.children[0].children[2].children[1].children[1].children[0].props.onClick(fakeEvent);
    // Re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('collapses peer item "Item 3" and submenu "Sub Item 4" of it when you click "Item 2"', () => {
    // Manually click second link (tree > ul:0 > li:1 > a:0, "Item 2")
    tree.children[0].children[1].children[0].props.onClick(fakeEvent);
    // Re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('collapses "Item 2" back when you click again', () => {
    // Manually click second link (tree > ul:0 > li:1 > a:0, "Item 2")
    tree.children[0].children[1].children[0].props.onClick(fakeEvent);
    // Re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
