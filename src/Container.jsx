/*
 * src/Container.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 23.03.2016
 */

import React, { Component, PropTypes } from 'react';
import Item from './Item';

/**
 * Item Container / Submenu Class
 *
 * Containers are levels of menu, and keep items.
 * Also provides comminication between items to close each other's sub menu levels
 *
 * Props come from top component
 * @prop {string} iconClassPrefix - Prefix for all icon's style class name
 * @prop {string} iconLevelDown - Icon name for state of collapsed containers
 * @prop {string} iconLevelUp - Icon name for state of opened containers
 *
 * Props come from parent Item
 * @prop {boolean} visible - State of container visibility
 * @prop {Object[]} content - Recursive menu stracture (It also comes from top to first container
 * depth)
 */
class Container extends Component {
  constructor() {
    super();

    this.closeChildContainers = this.closeChildContainers.bind(this);
  }
  /**
   * To close all item's submenu containers except sender item
   */
  closeChildContainers() {
    if (!this.props.content) return;

    this.items.forEach(item => {
      item.closeContainer();
    });
  }
  /**
   * Renders container block and menu items of it
   *
   * Also sends closeChildContainer method reference to props of items,
   * to make them able to close each others submenu container
   * when they are opened
   * @return {Object} React component
   */
  render() {
    let className = 'metismenu-container';
    if (this.props.visible) className += ' visible';

    this.items = [];

    return (
      <ul className={className}>
        {this.props.content.map((item, i) => (
          <Item
            key={i}
            ref={r => { this.items[i] = r; }}
            closePeerContainers={this.closeChildContainers}
            iconClassPrefix={this.props.iconClassPrefix}
            iconLevelDown={this.props.iconLevelDown}
            iconLevelUp={this.props.iconLevelUp}
            {...item}
          />
        ))}
      </ul>
    );
  }
}

Container.propTypes = {
  iconClassPrefix: PropTypes.string,
  iconLevelDown: PropTypes.string,
  iconLevelUp: PropTypes.string,
  visible: PropTypes.bool,
  content: PropTypes.array,
};

export default Container;
