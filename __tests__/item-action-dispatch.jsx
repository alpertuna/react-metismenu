/**
 * item-action-dispatch.jsx
 * Author: Jason Wong <jwong84@gmail.com>
 * Date: 23.10.2017
 */

/* eslint-env jest */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { mapDispatchToProps } from '../src/containers/Item';

describe('Menu with recursive content', () => {
  const fakeEvent = {
    preventDefault() {},
    isDefaultPrevented() { return false; }
  };

  const fakePreventedEvent = { 
    preventDefault() {},
    isDefaultPrevented() { return true; }
  }

  it('dispatches changeSubMenuVisibility action when hasSubMenu upon toggleSubMenu', () => {
    const mockDispatch = jest.fn();
    const actions = mapDispatchToProps(mockDispatch, { hasSubMenu: true });

    actions.toggleSubMenu(fakeEvent);

    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0].type).toBe('CHANGE_SUBMENU_VISIBILITY');
  });

  it('does not dispatch changeSubMenuVisibility action when !hasSubMenu upon toggleSubMenu', () => {
    const mockDispatch = jest.fn();
    const actions = mapDispatchToProps(mockDispatch, { hasSubMenu: false });

    actions.toggleSubMenu(fakeEvent);

    expect(mockDispatch.mock.calls.length).toBe(0);
  });

  it('dispatches emitSelected and changeActiveLinkId actions upon activateMe', () => {
    const mockDispatch = jest.fn();
    const actions = mapDispatchToProps(mockDispatch, {});

    actions.activateMe(fakeEvent);

    expect(mockDispatch.mock.calls.length).toBe(2);
    expect(mockDispatch.mock.calls[0][0].type).toBe('EMIT_SELECTED');
    expect(mockDispatch.mock.calls[1][0].type).toBe('CHANGE_ACTIVE_LINK');
  });

  it('does not dispatch changeActiveLinkId action upon activateMe when e.isDefaultPrevented', () => {
    const mockDispatch = jest.fn();
    const actions = mapDispatchToProps(mockDispatch, {});

    actions.activateMe(fakeEvent);

    expect(mockDispatch.mock.calls.length).toBe(2);
    expect(mockDispatch.mock.calls[0][0].type).toBe('EMIT_SELECTED');
    expect(mockDispatch.mock.calls[1][0].type).toBe('CHANGE_ACTIVE_LINK');
  });

  it('does not dispatch changeActiveLinkId action upon activateMe when e.isDefaultPrevented', () => {
    const mockDispatch = jest.fn();
    const actions = mapDispatchToProps(mockDispatch, {});

    actions.activateMe(fakePreventedEvent);

    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0].type).toBe('EMIT_SELECTED');
  });
});
