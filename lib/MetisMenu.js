'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _DefaultLinkComponent = require('./DefaultLinkComponent');

var _DefaultLinkComponent2 = _interopRequireDefault(_DefaultLinkComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * @prop {string} [props.iconNameStateVisible=caret-left] - Icon name for state of opened containers
 * containers
 * @prop {string} [props.iconNameStateHidden=caret-down] - Icon name for state of collapsed
 * @prop {React.Component} [props.LinkComponent=DefaultLinkComponent] - Handles link components of
 * all items
 * @prop {Object[]} [props.content=[]] - It keeps all recursive structure of Metismenu
 */
var MetisMenu = function MetisMenu(props) {
  // Prepare all classnames before deploying
  var className = '';
  var classNameContainer = '';
  var classNameContainerVisible = '';
  var classNameItem = '';
  var classNameLink = '';
  var classNameIcon = '';
  var classNameStateIcon = '';
  if (!props.noBuiltInClassNames) {
    className = 'metismenu';
    classNameContainer = 'metismenu-container';
    classNameContainerVisible = 'visible';
    classNameItem = 'metismenu-item';
    classNameLink = 'metismenu-link';
    classNameIcon = 'metismenu-icon';
    classNameStateIcon = 'metismenu-state-icon';
  }
  if (props.className) className += ' ' + props.className;
  if (props.classNameContainer) classNameContainer += ' ' + props.classNameContainer;
  if (props.classNameContainerVisible) {
    classNameContainerVisible += ' ' + props.classNameContainerVisible;
  }
  if (props.classNameItem) classNameItem += ' ' + props.classNameItem;
  if (props.classNameLink) classNameLink += ' ' + props.classNameLink;
  if (props.classNameIcon) classNameIcon += ' ' + props.classNameIcon;
  if (props.classNameStateIcon) classNameStateIcon += ' ' + props.classNameStateIcon;

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(_Container2.default, {
      classNameContainer: classNameContainer,
      classNameContainerVisible: classNameContainerVisible,
      classNameItem: classNameItem,
      classNameLink: classNameLink,
      classNameIcon: classNameIcon,
      classNameStateIcon: classNameStateIcon,
      iconNamePrefix: props.iconNamePrefix || 'fa fa-',
      iconNameStateVisible: props.iconNameStateVisible || 'caret-down',
      iconNameStateHidden: props.iconNameStateHidden || 'caret-left',
      LinkComponent: props.LinkComponent || _DefaultLinkComponent2.default,
      content: props.content || []
    })
  );
}; /*
    * src/MetisMenu.js
    * Author: H.Alper Tuna <halpertuna@gmail.com>
    * Date: 23.03.2016
    */

MetisMenu.propTypes = {
  className: _react.PropTypes.string,
  classNameContainer: _react.PropTypes.string,
  classNameContainerVisible: _react.PropTypes.string,
  classNameItem: _react.PropTypes.string,
  classNameLink: _react.PropTypes.string,
  classNameIcon: _react.PropTypes.string,
  classNameStateIcon: _react.PropTypes.string,
  noBuiltInClassNames: _react.PropTypes.bool,
  iconNamePrefix: _react.PropTypes.string,
  iconNameStateVisible: _react.PropTypes.string,
  iconNameStateHidden: _react.PropTypes.string,
  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
  content: _react.PropTypes.array
};

exports.default = MetisMenu;