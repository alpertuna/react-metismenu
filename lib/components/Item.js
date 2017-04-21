'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Container = require('../containers/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(_ref, _ref2) {
  var id = _ref.id,
      icon = _ref.icon,
      label = _ref.label,
      to = _ref.to,
      externalLink = _ref.externalLink,
      hasSubMenu = _ref.hasSubMenu,
      active = _ref.active,
      hasActiveChild = _ref.hasActiveChild,
      subMenuVisibility = _ref.subMenuVisibility,
      toggleSubMenu = _ref.toggleSubMenu,
      activateMe = _ref.activateMe,
      reduxStoreName = _ref.reduxStoreName,
      reduxUid = _ref.reduxUid;
  var classStore = _ref2.classStore,
      LinkComponent = _ref2.LinkComponent;
  return _react2.default.createElement(
    'li',
    {
      className: (0, _classnames2.default)(classStore.classItem, active && classStore.classItemActive, hasActiveChild && classStore.classItemHasActiveChild, hasSubMenu && subMenuVisibility && classStore.classItemHasVisibleChild)
    },
    _react2.default.createElement(
      LinkComponent,
      {
        className: classStore.classLink,
        classNameActive: classStore.classLinkActive,
        classNameHasActiveChild: classStore.classLinkHasActiveChild,
        active: active,
        hasActiveChild: hasActiveChild,
        id: id,
        to: to,
        label: label,
        externalLink: externalLink,
        hasSubMenu: hasSubMenu,
        toggleSubMenu: toggleSubMenu,
        activateMe: activateMe
      },
      _react2.default.createElement('i', { className: (0, _classnames2.default)(classStore.classIcon, classStore.iconNamePrefix + icon) }),
      label,
      hasSubMenu && _react2.default.createElement('i', {
        className: (0, _classnames2.default)(classStore.classStateIcon, classStore.iconNamePrefix + (subMenuVisibility ? classStore.iconNameStateVisible : classStore.iconNameStateHidden))
      })
    ),
    hasSubMenu && _react2.default.createElement(_Container2.default, {
      itemId: id,
      visible: subMenuVisibility,
      reduxStoreName: reduxStoreName,
      reduxUid: reduxUid
    })
  );
}; /**
    * src/components/Container.jsx
    * Author: H.Alper Tuna <halpertuna@gmail.com>
    * Date: 16.09.2016
    */

Item.defaultProps = {
  icon: '',
  label: '',
  to: null,
  externalLink: false,
  toggleSubMenu: null
};

Item.propTypes = {
  id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
  icon: _react.PropTypes.string,
  label: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.array, _react.PropTypes.string]),
  to: _react.PropTypes.string,
  externalLink: _react.PropTypes.bool,
  hasSubMenu: _react.PropTypes.bool.isRequired,
  active: _react.PropTypes.bool.isRequired,
  hasActiveChild: _react.PropTypes.bool.isRequired,
  subMenuVisibility: _react.PropTypes.bool.isRequired,
  toggleSubMenu: _react.PropTypes.func,
  activateMe: _react.PropTypes.func.isRequired,
  reduxStoreName: _react.PropTypes.string.isRequired,
  reduxUid: _react.PropTypes.number.isRequired
};

Item.contextTypes = {
  classStore: _react.PropTypes.object.isRequired,
  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]).isRequired
};

exports.default = Item;