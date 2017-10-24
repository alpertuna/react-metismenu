/**
 * src/containers/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import { connect } from 'react-redux';
import Container from '../components/Container';

const mapStateToProps = (store, ownProps) => ({
  items: (
    store[ownProps.reduxStoreName]
      .content[ownProps.reduxUid]
      .filter(item => item.parentId === ownProps.itemId)
  ),
});

export default connect(mapStateToProps)(Container);
