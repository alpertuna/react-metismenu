/*
 * src/MetisMenu.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 23.03.2016
 */

import React, { PropTypes } from 'react';
import Container from './Container';
import DefaultLinkComponent from './DefaultLinkComponent';

/**
 * Main container of MetisMenu
 *
 * If props are not given, it sets default props for first depth container
 * @constructor
 * @extends React.Component
 *
 * Props come from top component
 * @prop {string} [props.className] - Class name for main metismenu wrapper
 * @prop {string} [props.classNameContainer] - Class name for item container (ul)
 * @prop {string} [props.classNameContainerVisible] - Class name when container is visible
 * @prop {string} [props.classNameItem] - Class name for items in container (li)
 * @prop {string} [props.classNameLink] - Class name for links in items (a)
 * @prop {string} [props.classNameIcon] - Class name for link icons
 * @prop {string} [props.classNameStateIcon] - Class name for state indicators of submenu
 * @prop {boolean} [props.noBuiltInClassNames=false] - When true, core css class names won't be used
 * @prop {string} [props.iconNamePrefix=fa fa-] - Prefix for all icon's style class name
 * @prop {string} [props.iconNameStateVisible=caret-left] - Icon name for state of collapsed
 * containers
 * @prop {string} [props.iconNameStateHidden=caret-down] - Icon name for state of opened containers
 * @prop {React.Component} [props.LinkComponent=DefaultLinkComponent] - Handles link components of
 * all items
 * @prop {Object[]} [props.content=[]] - It keeps all recursive structure of Metismenu
 */
const MetisMenu = (props) => {
  // Prepare all classnames before deploying
  let className = '';
  let classNameContainer = '';
  let classNameContainerVisible = '';
  let classNameItem = '';
  let classNameLink = '';
  let classNameIcon = '';
  let classNameStateIcon = '';
  if (!props.noBuiltInClassNames) {
    className = 'metismenu';
    classNameContainer = 'metismenu-container';
    classNameContainerVisible = 'visible';
    classNameItem = 'metismenu-item';
    classNameLink = 'metismenu-link';
    classNameIcon = 'metismenu-icon';
    classNameStateIcon = 'metismenu-state-icon';
  }
  if (props.className) className += ` ${props.className}`;
  if (props.classNameContainer) classNameContainer += ` ${props.classNameContainer}`;
  if (props.classNameContainerVisible) {
    classNameContainerVisible += ` ${props.classNameContainerVisible}`;
  }
  if (props.classNameItem) classNameItem += ` ${props.classNameItem}`;
  if (props.classNameLink) classNameLink += ` ${props.classNameLink}`;
  if (props.classNameIcon) classNameIcon += ` ${props.classNameIcon}`;
  if (props.classNameStateIcon) classNameStateIcon += ` ${props.classNameStateIcon}`;

  return (
    <div className={className}>
      <Container
        classNameContainer={classNameContainer}
        classNameContainerVisible={classNameContainerVisible}
        classNameItem={classNameItem}
        classNameLink={classNameLink}
        classNameIcon={classNameIcon}
        classNameStateIcon={classNameStateIcon}
        iconNamePrefix={props.iconNamePrefix || 'fa fa-'}
        iconNameStateVisible={props.iconNameStateVisible || 'caret-left'}
        iconNameStateHidden={props.iconNameStateHidden || 'caret-down'}
        LinkComponent={props.LinkComponent || DefaultLinkComponent}
        content={props.content || []}
      />
    </div>
  );
};

MetisMenu.propTypes = {
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameContainerVisible: PropTypes.string,
  classNameItem: PropTypes.string,
  classNameLink: PropTypes.string,
  classNameIcon: PropTypes.string,
  classNameStateIcon: PropTypes.string,
  noBuiltInClassNames: PropTypes.bool,
  iconNamePrefix: PropTypes.string,
  iconNameStateVisible: PropTypes.string,
  iconNameStateHidden: PropTypes.string,
  LinkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  content: PropTypes.array,
};

export default MetisMenu;
