/**
 * src/containers/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import { connect } from 'react-redux';
import Container from '../components/Container';

const mapStateToProps = (state, ownProps) => ({
  items: state.filter(item => item.parentId === ownProps.itemId),
});

export default connect(
  mapStateToProps
)(Container);
