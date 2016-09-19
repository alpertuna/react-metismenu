/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Item from '../containers/Item';

const Container = ({ classStore, items, visible }) => (
  <ul
    className={classnames(
      classStore.classContainer,
      visible && classStore.classContainerVisible
    )}
  >
    {items.map((item, i) => (
      <Item key={i} classStore={classStore} {...item} />
    ))}
  </ul>
);

Container.propTypes = {
  classStore: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  visible: PropTypes.bool,
};

export default Container;
