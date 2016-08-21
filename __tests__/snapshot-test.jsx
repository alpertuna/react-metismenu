/**
 * __tests__/menu-test.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 20.08.2016
 */

/* eslint-env jest */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import React from 'react';
import renderer from 'react-test-renderer';

import Menu from '../src/MetisMenu';

describe('Menu item has submenu', () => {
  // Create test component
  const content = [
    { label: 'Item 1', href: '#item-1', icon: 'bolt' },
    {
      label: 'Item 2',
      href: '#item-2',
      icon: 'bell',
      content: [
        { label: 'Sub Item 1', href: '#sub-item-1', icon: 'eye' },
        { label: 'Sub Item 2', href: '#sub-item-2', icon: 'globe' },
      ],
    },
    {
      label: 'Item 3',
      href: '#item-3',
      icon: 'bell',
      content: [
        { label: 'Sub Item 3', href: '#sub-item-3', icon: 'eye' },
        {
          label: 'Sub Item 4',
          href: '#sub-item-4',
          icon: 'globe',
          content: [
            { label: 'Level 3 Item 1', href: '#level-3-item-1', icon: 'bolt' },
            { label: 'Level 3 Item 2', href: '#level-3-item-2', icon: 'bell' },
          ],
        },
      ],
    },
  ];
  const fakeEvent = {
    preventDefault() {},
  };
  const component = renderer.create(<Menu content={content} />);
  let tree = component.toJSON();

  it('looks like', () => {
    // First snapshot
    expect(tree).toMatchSnapshot();
  });

  it('changes class and caret icon when clicked', () => {
    // Manually click third link (tree > ul:0 > li:2 > a:0, "Item 3")
    tree.children[0].children[2].children[0].props.onClick(fakeEvent);
    // Re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Manually click third link's sub menu (tree > ul:0 > li:2 > ul:1 > li:1 > a:0, "Sub Item 4")
    tree.children[0].children[2].children[1].children[1].children[0].props.onClick(fakeEvent);
    // Re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('collapses peer items and submenus of them when clicked', () => {
    // Manually click second link (tree > ul:0 > li:1 > a:0, "Item 2")
    tree.children[0].children[1].children[0].props.onClick(fakeEvent);
    // Re-render
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
