/**
 * __tests__/virtual-dom-test.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 20.08.2016
 */

/* eslint-env jest */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// jest.unmock('../src/MetisMenu')

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { wrap } from 'react-stateless-wrapper';

import Menu from '../src/MetisMenu';

describe('Menu items', () => {
  // Create test component
  const content = [
    { label: 'Item 1', to: '#item-1', icon: 'bolt' },
    {
      label: 'Item 2',
      to: '#item-2',
      icon: 'bell',
      content: [
        { label: 'Sub Item 1', to: '#sub-item-1', icon: 'eye' },
        { label: 'Sub Item 2', to: '#sub-item-2', icon: 'globe' },
      ],
    },
    {
      label: 'Item 3',
      to: '#item-3',
      icon: 'bell',
      content: [
        { label: 'Sub Item 3', to: '#sub-item-3', icon: 'eye' },
        {
          label: 'Sub Item 4',
          to: '#sub-item-4',
          icon: 'globe',
          content: [
            { label: 'Level 3 Item 1', to: '#level-3-item-1', icon: 'bolt' },
            { label: 'Level 3 Item 2', to: '#level-3-item-2', icon: 'bell' },
          ],
        },
      ],
    },
  ];
  const WrappedMenu = wrap(Menu);
  const component = TestUtils.renderIntoDocument(<WrappedMenu content={content} />);

  function getItem(item) {
    let linkIndex;
    let containerIndex;

    switch (item) {
      case 'item2':
        linkIndex = 1;
        containerIndex = 1;
        break;
      case 'item3':
        linkIndex = 4;
        containerIndex = 2;
        break;
      case 'subItem4':
      default:
        linkIndex = 6;
        containerIndex = 3;
        break;
    }

    const link = TestUtils.scryRenderedDOMComponentsWithTag(component, 'a')[linkIndex];

    return {
      link,
      container: TestUtils.scryRenderedDOMComponentsWithTag(component, 'ul')[containerIndex],
    };
  }

  it('has labels', () => {
    expect(getItem('item2').link.textContent).toBe('Item 2');
    expect(getItem('item3').link.textContent).toBe('Item 3');
    expect(getItem('subItem4').link.textContent).toBe('Sub Item 4');
  });

  it('changes class and caret icon when clicked', () => {
    // Click Item 3
    TestUtils.Simulate.click(getItem('item3').link);
    // Caret icon
    expect(
      getItem('item3').link.children[1].classList.contains('fa-caret-down')
    ).toBeTruthy();
    // Container visibility
    expect(
      getItem('item3').container.classList.contains('visible')
    ).toBeTruthy();

    // Click Sub Item 4
    TestUtils.Simulate.click(getItem('subItem4').link);
    // Caret icon
    expect(
      getItem('subItem4').link.children[1].classList.contains('fa-caret-down')
    ).toBeTruthy();
    // Container visibility
    expect(
      getItem('subItem4').container.classList.contains('visible')
    ).toBeTruthy();
  });

  it('collapses peer items and submenus of them when clicked', () => {
    // Click Item 2
    TestUtils.Simulate.click(getItem('item2').link);
    // Caret icon
    expect(
      getItem('item2').link.children[1].classList.contains('fa-caret-down')
    ).toBeTruthy();
    // Container visibility
    expect(
      getItem('item2').container.classList.contains('visible')
    ).toBeTruthy();

    // Item 3
    // Caret icon
    expect(
      getItem('item3').link.children[1].classList.contains('fa-caret-left')
    ).toBeTruthy();
    // Container visibility
    expect(
      getItem('item3').container.classList.contains('visible')
    ).toBeFalsy();

    // Sub Item 4
    // Caret icon
    expect(
      getItem('subItem4').link.children[1].classList.contains('fa-caret-left')
    ).toBeTruthy();
    // Container visibility
    expect(
      getItem('subItem4').container.classList.contains('visible')
    ).toBeFalsy();
  });
});
