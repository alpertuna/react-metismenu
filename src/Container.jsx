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
 * Containers are levels of menu, and keep items. Refers to <ul>.
 * Also provides comminication between items to close each other's sub menu levels
 * @extends React.Component
 */
class Container extends Component {
  /**
   * Creates item container.
   *
   * Props come from top component
   * @prop {string} props.classNameContainer - Class name for item container (ul)
   * @prop {string} props.classNameContainerVisible - Class name when container is visible
   * @prop {string} props.classNameItem - Class name for items in container (li)
   * @prop {string} props.classNameLink - Class name for links in items (a)
   * @prop {string} props.classNameIcon - Class name for link icons
   * @prop {string} props.classNameStateIcon - Class name for state indicators of submenu
   * @prop {string} props.iconNamePrefix - Prefix for all icon's style class name
   * @prop {string} props.iconNameStateVisible - Icon name for state of collapsed containers
   * @prop {string} props.iconNameStateHidden - Icon name for state of opened containers
   * @prop {React.Component} props.LinkComponent - Handles link components of all items
   *
   * Props come from parent Item
   * @prop {boolean} [props.visible] - State of container visibility
   * @prop {Object[]} props.content - Recursive menu stracture (It also comes from top
   * to first container depth)
   */
  constructor() {
    super();

    this.closeChildContainers = this.closeChildContainers.bind(this);
  }
  /**
   * Closes all sub containers
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
   * @return {Object} React component
   */
  render() {
    let className = this.props.classNameContainer;
    if (this.props.visible) className += ` ${this.props.classNameContainerVisible}`;

    this.items = [];

    return (
      <ul className={className}>
        {this.props.content.map((item, i) => (
          <Item
            key={i}
            ref={r => { if (r !== null) this.items.push(r); }}
            closePeerContainers={this.closeChildContainers}
            classNameContainer={this.props.classNameContainer}
            classNameContainerVisible={this.props.classNameContainerVisible}
            classNameItem={this.props.classNameItem}
            classNameLink={this.props.classNameLink}
            classNameIcon={this.props.classNameIcon}
            classNameStateIcon={this.props.classNameStateIcon}
            iconNamePrefix={this.props.iconNamePrefix}
            iconNameStateVisible={this.props.iconNameStateVisible}
            iconNameStateHidden={this.props.iconNameStateHidden}
            LinkComponent={this.props.LinkComponent}
            {...item}
          />
        ))}
      </ul>
    );
  }
}

Container.propTypes = {
  classNameContainer: PropTypes.string.isRequired,
  classNameContainerVisible: PropTypes.string.isRequired,
  classNameItem: PropTypes.string.isRequired,
  classNameLink: PropTypes.string.isRequired,
  classNameIcon: PropTypes.string.isRequired,
  classNameStateIcon: PropTypes.string.isRequired,
  iconNamePrefix: PropTypes.string.isRequired,
  iconNameStateVisible: PropTypes.string.isRequired,
  iconNameStateHidden: PropTypes.string.isRequired,
  LinkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  visible: PropTypes.bool,
  content: PropTypes.array.isRequired,
};

export default Container;
