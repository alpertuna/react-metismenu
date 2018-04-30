/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from '../containers/Item';

const Container = ({
  items,
  visible,
  itemId,
  reduxStoreName,
  reduxUid,
}, {
  classStore,
}) => (
  <ul
    className={classnames(
      typeof classStore.classContainer === 'function'
        ? classStore.classContainer({ itemId, visible, items })
        : classStore.classContainer,
      visible && classStore.classContainerVisible,
    )}
  >
    {items.map((item, i) => (
      <Item key={item.id || `_${i}`} reduxStoreName={reduxStoreName} reduxUid={reduxUid} {...item} />
    ))}
  </ul>
);

Container.defaultProps = {
  itemId: null,
  visible: false,
};

Container.propTypes = {
  itemId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  visible: PropTypes.bool,
  reduxStoreName: PropTypes.string.isRequired,
  reduxUid: PropTypes.number.isRequired,
};

Container.contextTypes = {
  classStore: PropTypes.object.isRequired,
};

export default Container;
