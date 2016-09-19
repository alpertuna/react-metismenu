/**
 * src/actions/item-active-link.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

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
