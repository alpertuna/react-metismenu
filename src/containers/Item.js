/**
 * src/containers/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import { connect } from 'react-redux';
import { toggleSubMenu } from '../actions/item-sub-menu';
import { changeActiveLinkId } from '../actions/item-active-link';
import Item from '../components/Item';

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleSubMenu: ownProps.hasSubMenu
  ? e => {
    e.preventDefault();
    dispatch(toggleSubMenu(ownProps.id));
  }
  : undefined,
  activateMe() {
    dispatch(changeActiveLinkId(ownProps.id));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
