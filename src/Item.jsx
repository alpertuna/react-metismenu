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
 * @extends React.Component
 */
class Item extends Component {
  /**
   * Creates link item
   *
   * Props comes from top component
   * @prop {string} props.iconClassPrefix - Prefix for all icon's style class name
   * @prop {string} props.iconLevelDown - Icon name for state of collapsed containers
   * @prop {string} props.iconLevelUp - Icon name for state of opened containers
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
    const iconClassName = `metismenu-icon  ${this.props.iconClassPrefix}${this.props.icon}`;

    let to;
    let onClick;
    let iconLevel;
    let target;

    if (thisHasLevel) {
      let className = `metismenu-iconlevel ${this.props.iconClassPrefix}`;
      className += this.state.containerVisibility
        ? this.props.iconLevelUp
        : this.props.iconLevelDown;

      to = '#';
      onClick = this.toggleContainer;
      iconLevel = <span className={className} />;
    } else {
      to = this.props.to;
      iconLevel = null;
    }

    if (this.props.externalLink) {
      target = '_blank';
    }

    return (
      <li className="metismenu-item">
        <LinkComponent target={target} to={to} onClick={onClick}>
          <span className={iconClassName} />
          {this.props.label}
          {iconLevel}
        </LinkComponent>
        {thisHasLevel && <Container
          ref={r => { this.container = r; }}
          visible={this.state.containerVisibility}

          iconClassPrefix={this.props.iconClassPrefix}
          iconLevelDown={this.props.iconLevelDown}
          iconLevelUp={this.props.iconLevelUp}
          LinkComponent={LinkComponent}
          content={this.props.content}
        />}
      </li>
    );
  }
}

Item.propTypes = {
  iconClassPrefix: PropTypes.string.isRequired,
  iconLevelDown: PropTypes.string.isRequired,
  iconLevelUp: PropTypes.string.isRequired,
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
