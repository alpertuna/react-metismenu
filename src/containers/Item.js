/**
 * src/containers/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import { connect } from 'react-redux';
import { changeSubMenuVisibility, changeActiveLinkId } from '../actions/content';
import { emitSelected } from '../actions/emitters';
import Item from '../components/Item';

export const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleSubMenu(e) {
    if (!ownProps.hasSubMenu) return;
    e.preventDefault();
    dispatch(changeSubMenuVisibility(
      ownProps.reduxUid,
      ownProps.id,
      ownProps.trace,
      !ownProps.subMenuVisibility,
    ));
  },
  activateMe(e) {
    dispatch(emitSelected(ownProps.reduxUid, e));
    if (!e || !e.isDefaultPrevented || !e.isDefaultPrevented()) {
      dispatch(changeActiveLinkId(ownProps.reduxUid, ownProps.id));
    }
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Item);
