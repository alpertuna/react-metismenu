/**
 * collapse.virtual-dom.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 20.08.2016
 */

/* eslint-env jest */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import Menu from '../src';
import content from './CONTENT.json';

describe('Menu with recursive content', () => {
  // Create test component
  const component = TestUtils.renderIntoDocument(<Menu content={content} />);

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

    return {
      link: TestUtils.scryRenderedDOMComponentsWithTag(component, 'a')[linkIndex],
      container: TestUtils.scryRenderedDOMComponentsWithTag(component, 'ul')[containerIndex],
    };
  }

  it('has labels', () => {
    expect(getItem('item2').link.textContent).toBe('Item 2');
    expect(getItem('item3').link.textContent).toBe('Item 3');
    expect(getItem('subItem4').link.textContent).toBe('Sub Item 4');
  });

  it('changes class and caret icon of "Item 3" when you click it', () => {
    // Click Item 3
    TestUtils.Simulate.click(getItem('item3').link);
    // Caret icon
    expect(
      getItem('item3').link.children[1].classList.contains('rotate-minus-90'),
    ).toBeTruthy();
    // Container visibility
    expect(
      getItem('item3').container.classList.contains('visible'),
    ).toBeTruthy();
  });

  it('changes class and caret icon of "Sub Item 4" when you click it', () => {
    // Click Sub Item 4
    TestUtils.Simulate.click(getItem('subItem4').link);
    // Caret icon
    expect(
      getItem('subItem4').link.children[1].classList.contains('rotate-minus-90'),
    ).toBeTruthy();
    // Container visibility
    expect(
      getItem('subItem4').container.classList.contains('visible'),
    ).toBeTruthy();
  });

  it('collapses peer item "Item 3" and submenu "Sub Item 4" of it when you click "Item 2"', () => {
    // Click Item 2
    TestUtils.Simulate.click(getItem('item2').link);
    // Caret icon
    expect(
      getItem('item2').link.children[1].classList.contains('rotate-minus-90'),
    ).toBeTruthy();
    // Container visibility
    expect(
      getItem('item2').container.classList.contains('visible'),
    ).toBeTruthy();

    // Item 3
    // Caret icon
    expect(
      getItem('item3').link.children[1].classList.contains('rotate-minus-90'),
    ).toBeFalsy();
    // Container visibility
    expect(
      getItem('item3').container.classList.contains('visible'),
    ).toBeFalsy();

    // Sub Item 4
    // Caret icon
    expect(
      getItem('subItem4').link.children[1].classList.contains('rotate-minus-90'),
    ).toBeFalsy();
    // Container visibility
    expect(
      getItem('subItem4').container.classList.contains('visible'),
    ).toBeFalsy();
  });

  it('collapses "Item 2" back when you click again', () => {
    // Click Item 2
    TestUtils.Simulate.click(getItem('item2').link);
    // Caret icon
    expect(
      getItem('item2').link.children[1].classList.contains('rotate-minus-90'),
    ).toBeFalsy();
    // Container visibility
    expect(
      getItem('item2').container.classList.contains('visible'),
    ).toBeFalsy();
  });
});
