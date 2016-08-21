/*
 * src/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Contributor: Layne Anderson
 * Date: 17.08.2016
 */

import React, { Component, PropTypes } from 'react';
import Container from './Container';

/**
 * Menu Item Class
 *
 * Props comes from top component
 * @prop {string} iconClassPrefix - Prefix for all icon's style class name
 * @prop {string} iconLevelDown - Icon name for state of collapsed containers
 * @prop {string} iconLevelUp - Icon name for state of opened containers
 *
 * Props comes from parent Container
 * @prop {function} closeFriendContainer - Function to close peer item's container
 *
 * Props comes from menu content
 * @prop {string} icon - icon class name for item
 * @prop {string} label - label of item
 * @prop {boolean} externalLink - (optional) if true href opens in new tab/window
 * @prop {string} href - link address of item
 * @prop {Object[]} content - Recursive menu stracture
 *
 */
class Item extends Component {
  /**
   * constructor
   * it sets first state of container's visibility
   */
  constructor() {
    super();

    this.state = {
      containerVisibility: false,
    };

    this.toggleContainer = this.toggleContainer.bind(this);
  }

  /**
   * To check this item has submenu
   * @return {boolean}
   */
  hasLevel() {
    return typeof this.props.content !== 'undefined';
  }

  /**
   * Returns container's visibility status
   * @return {boolean} If it's true, container is collapsed
   */
  isContainerClosed() {
    return !this.state.containerVisibility;
  }
  /*
   * Change container's visibility state to true and close peer items container
   */
  openContainer() {
    this.props.closePeerContainers();
    this.setState({
      containerVisibility: true,
    });
  }
  /*
   * Change container's visibility state to false and close submenu too
   */
  closeContainer() {
    if (this.hasLevel()) this.container.closeChildContainers();
    this.setState({
      containerVisibility: false,
    });
  }
  /*
   * Toggles container visibility state
   */
  toggleContainer(e) {
    e.preventDefault();

    if (this.isContainerClosed()) {
      this.openContainer();
    } else {
      this.closeContainer();
    }
  }

  /*
   * Renders item and if it has level, submenu (container) of it
   * If item has sub menu, button's href link won't be applied and
   * will be added level status indicator icon to button.
   * @return {Object} React component
   */
  render() {
    const thisHasLevel = this.hasLevel();
    let iconClassName = `metismenu-icon  ${this.props.iconClassPrefix}${this.props.icon}`;

    let href;
    let onClick;
    let iconLevel;
    let target;

    if (thisHasLevel) {
      let className = `metismenu-iconlevel ${this.props.iconClassPrefix}`;
      className += this.state.containerVisibility
        ? this.props.iconLevelUp
        : this.props.iconLevelDown;

      href = '#';
      onClick = this.toggleContainer;
      iconLevel = <span className={className} />;
    } else {
      href = this.props.href;
      onClick = false;
      iconLevel = null;
    }

    if (this.props.externalLink) {
      target = '_blank';
    } else {
      target = '';
    }

    return (
      <li className="metismenu-item">
        <a target={target} href={href} onClick={onClick}>
          <span className={iconClassName} />
          {this.props.label}
          {iconLevel}
        </a>
        {thisHasLevel && <Container
          ref={r => { this.container = r; }}
          visible={this.state.containerVisibility}

          iconClassPrefix={this.props.iconClassPrefix}
          iconLevelDown={this.props.iconLevelDown}
          iconLevelUp={this.props.iconLevelUp}
          content={this.props.content}
        />}
      </li>
    );
  }
}

Item.propTypes = {
  iconClassPrefix: PropTypes.string,
  iconLevelDown: PropTypes.string,
  iconLevelUp: PropTypes.string,
  closePeerContainers: PropTypes.func,
  icon: PropTypes.string,
  label: PropTypes.string,
  externalLink: PropTypes.bool,
  href: PropTypes.string,
  content: PropTypes.array,
};

export default Item;
