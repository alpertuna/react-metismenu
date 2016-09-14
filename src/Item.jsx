/*
 * src/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Contributor: Layne Anderson
 * Date: 17.08.2016
 */

/* eslint max-len: ["error", { "code": 100, "ignoreTemplateLiterals": true }] */

import React, { Component, PropTypes } from 'react';
import Container from './Container';

/**
 * Menu Item Class
 * Refers to <li>.
 *
 * @extends React.Component
 */
class Item extends Component {
  /**
   * Creates link item
   *
   * Props comes from top component
   * @prop {string} props.classNameContainer - Class name for item container (ul)
   * @prop {string} props.classNameContainerVisible - Class name when container is visible
   * @prop {string} props.classNameItem - Class name for items in container (li)
   * @prop {string} props.classNameLink - Class name for links in items (a)
   * @prop {string} props.classNameIcon - Class name for link icons
   * @prop {string} props.classNameStateIcon - Class name for state indicators of submenu
   * @prop {string} props.iconNamePrefix - Prefix for all icon's style class name
   * @prop {string} props.iconNameStateVisible - Icon name for state of opened containers
   * @prop {string} props.iconNameStateHidden - Icon name for state of collapsed containers
   * @prop {React.Component} props.LinkComponent - Handles link components of all items
   *
   * Props comes from parent Container
   * @prop {function} props.closePeerContainers - Function to close peer item's container
   *
   * Props comes from menu content
   * @prop {string} [props.icon] - icon class name for item
   * @prop {string} props.label - label of item
   * @prop {boolean} [props.externalLink] - (optional) if true href opens in new tab/window
   * @prop {string} [props.to] - link address of item, refers href attribute of "A" tag
   * @prop {Object[]} [props.content] - Recursive menu stracture
   *
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
   * Opens its container and closes peer items' containers
   */
  openContainer() {
    this.props.closePeerContainers();
    this.setState({
      containerVisibility: true,
    });
  }
  /*
   * Closes all sub containers
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
   * Renders item and submenus
   *
   * @return {Object} React component
   */
  render() {
    const LinkComponent = this.props.LinkComponent;

    const thisHasLevel = this.hasLevel();
    const iconClassName = `${this.props.classNameIcon} fa-fw ${this.props.iconNamePrefix}${this.props.icon}`;

    let to;
    let toggleContainer;
    let iconLevel;
    let target;

    if (thisHasLevel) {
      let className = `${this.props.classNameStateIcon} ${this.props.iconNamePrefix}`;
      className += this.state.containerVisibility
        ? this.props.iconNameStateVisible
        : this.props.iconNameStateHidden;

      to = '#';
      toggleContainer = this.toggleContainer;
      iconLevel = <i className={className} />;
    } else {
      to = this.props.to;
      iconLevel = null;
    }

    if (this.props.externalLink) {
      target = '_blank';
    }

    return (
      <li className={this.props.classNameItem}>
        <LinkComponent
          className={this.props.classNameLink}
          target={target}
          to={to}
          toggleSubMenu={toggleContainer}
        >
          <i className={iconClassName} />
          {this.props.label}
          {iconLevel}
        </LinkComponent>
        {thisHasLevel && <Container
          ref={r => { this.container = r; }}
          visible={this.state.containerVisibility}
          classNameContainer={this.props.classNameContainer}
          classNameContainerVisible={this.props.classNameContainerVisible}
          classNameItem={this.props.classNameItem}
          classNameLink={this.props.classNameLink}
          classNameIcon={this.props.classNameIcon}
          classNameStateIcon={this.props.classNameStateIcon}
          iconNamePrefix={this.props.iconNamePrefix}
          iconNameStateVisible={this.props.iconNameStateVisible}
          iconNameStateHidden={this.props.iconNameStateHidden}
          LinkComponent={LinkComponent}
          content={this.props.content}
        />}
      </li>
    );
  }
}

Item.propTypes = {
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
  closePeerContainers: PropTypes.func.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  externalLink: PropTypes.bool,
  to: PropTypes.string,
  content: PropTypes.array,
};

export default Item;
