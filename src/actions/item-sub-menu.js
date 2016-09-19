/**
 * src/actions/item-sub-menu.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

export const showSubMenu = id => ({
  type: 'SHOW_SUBMENU',
  subMenuVisibility: true,
  id,
});

export const hideSubMenu = id => ({
  type: 'HIDE_SUBMENU',
  subMenuVisibility: false,
  trace: [],
  id,
});

export const toggleSubMenu = id => ({
  type: 'TOGGLE_SUBMENU',
  id,
});
