/**
 * @file actions/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

export const updateContent = content => ({
  type: 'UPDATE_CONTENT',
  content,
});

export const changeSubMenuVisibility = (id, trace, subMenuVisibility) => ({
  type: 'CHANGE_SUBMENU_VISIBILITY',
  id,
  trace,
  subMenuVisibility,
});

export const changeActiveLinkId = value => ({
  type: 'CHANGE_ACTIVE_LINK',
  propName: 'id',
  value,
});
export const changeActiveLinkTo = value => ({
  type: 'CHANGE_ACTIVE_LINK',
  propName: 'to',
  value,
});
export const changeActiveLinkLabel = value => ({
  type: 'CHANGE_ACTIVE_LINK',
  propName: 'label',
  value,
});
export const changeActiveLinkFromLocation = () => ({
  type: 'CHANGE_ACTIVE_LINK_FROM_LOCATION',
});
