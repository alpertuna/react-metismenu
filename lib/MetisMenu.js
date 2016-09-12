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
 * @prop {string} [props.iconClassPrefix=fa fa-] - Prefix for all icon's style class name
 * @prop {string} [props.iconLevelDown=caret-left] - Icon name for state of collapsed containers
 * @prop {string} [props.iconLevelUp=caret-down] - Icon name for state of opened containers
 * @prop {React.Component} [props.LinkComponent=DefaultLinkComponent] - Handles link components of
 * all items
 * @prop {Object[]} [props.content=[]] - Recursive menu stracture
 */
var MetisMenu = function MetisMenu(props) {
  return _react2.default.createElement(
    'div',
    { className: 'metismenu' },
    _react2.default.createElement(_Container2.default, {
      iconClassPrefix: props.iconClassPrefix || 'fa fa-',
      iconLevelDown: props.iconLevelDown || 'caret-left',
      iconLevelUp: props.iconLevelUp || 'caret-down',
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
  iconClassPrefix: _react.PropTypes.string,
  iconLevelDown: _react.PropTypes.string,
  iconLevelUp: _react.PropTypes.string,
  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
  content: _react.PropTypes.array
};

exports.default = MetisMenu;