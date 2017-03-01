/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Item from '../containers/Item';

const Container = ({ items, visible, itemId }, { classStore }) => {
  return (
  <ul
    className={classnames(
      typeof classStore.classContainer === 'function' ? classStore.classContainer(itemId) : classStore.classContainer,
      visible && classStore.classContainerVisible
    )}
  >
    {items.map((item, i) => (
      <Item key={i} {...item} />
    ))}
  </ul>
)
};

Container.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  visible: PropTypes.bool,
};

Container.contextTypes = {
  classStore: PropTypes.object.isRequired,
};

export default Container;
