'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/Item.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contributor: Layne Anderson
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17.08.2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint max-len: ["error", { "code": 100, "ignoreTemplateLiterals": true }] */

/**
 * Menu Item Class
 * Refers to <li>.
 *
 * @extends React.Component
 */
var Item = function (_Component) {
  _inherits(Item, _Component);

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
  function Item() {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

    _this.state = {
      containerVisibility: false
    };

    _this.toggleContainer = _this.toggleContainer.bind(_this);
    return _this;
  }

  /**
   * To check this item has submenu
   * @return {boolean}
   */


  _createClass(Item, [{
    key: 'hasLevel',
    value: function hasLevel() {
      return typeof this.props.content !== 'undefined';
    }

    /**
     * Returns container's visibility status
     * @return {boolean} If it's true, container is collapsed
     */

  }, {
    key: 'isContainerClosed',
    value: function isContainerClosed() {
      return !this.state.containerVisibility;
    }
    /*
     * Opens its container and closes peer items' containers
     */

  }, {
    key: 'openContainer',
    value: function openContainer() {
      this.props.closePeerContainers();
      this.setState({
        containerVisibility: true
      });
    }
    /*
     * Closes all sub containers
     */

  }, {
    key: 'closeContainer',
    value: function closeContainer() {
      if (this.hasLevel()) this.container.closeChildContainers();
      this.setState({
        containerVisibility: false
      });
    }
    /*
     * Toggles container visibility state
     */

  }, {
    key: 'toggleContainer',
    value: function toggleContainer(e) {
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

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var LinkComponent = this.props.LinkComponent;

      var thisHasLevel = this.hasLevel();
      var iconClassName = this.props.classNameIcon + ' fa-fw ' + this.props.iconNamePrefix + this.props.icon;

      var to = void 0;
      var toggleContainer = void 0;
      var iconLevel = void 0;
      var target = void 0;

      if (thisHasLevel) {
        var className = this.props.classNameStateIcon + ' ' + this.props.iconNamePrefix;
        className += this.state.containerVisibility ? this.props.iconNameStateVisible : this.props.iconNameStateHidden;

        to = '#';
        toggleContainer = this.toggleContainer;
        iconLevel = _react2.default.createElement('i', { className: className });
      } else {
        to = this.props.to;
        iconLevel = null;
      }

      if (this.props.externalLink) {
        target = '_blank';
      }

      return _react2.default.createElement(
        'li',
        { className: this.props.classNameItem },
        _react2.default.createElement(
          LinkComponent,
          {
            className: this.props.classNameLink,
            target: target,
            to: to,
            toggleSubMenu: toggleContainer
          },
          _react2.default.createElement('i', { className: iconClassName }),
          this.props.label,
          iconLevel
        ),
        thisHasLevel && _react2.default.createElement(_Container2.default, {
          ref: function ref(r) {
            _this2.container = r;
          },
          visible: this.state.containerVisibility,
          classNameContainer: this.props.classNameContainer,
          classNameContainerVisible: this.props.classNameContainerVisible,
          classNameItem: this.props.classNameItem,
          classNameLink: this.props.classNameLink,
          classNameIcon: this.props.classNameIcon,
          classNameStateIcon: this.props.classNameStateIcon,
          iconNamePrefix: this.props.iconNamePrefix,
          iconNameStateVisible: this.props.iconNameStateVisible,
          iconNameStateHidden: this.props.iconNameStateHidden,
          LinkComponent: LinkComponent,
          content: this.props.content
        })
      );
    }
  }]);

  return Item;
}(_react.Component);

Item.propTypes = {
  classNameContainer: _react.PropTypes.string.isRequired,
  classNameContainerVisible: _react.PropTypes.string.isRequired,
  classNameItem: _react.PropTypes.string.isRequired,
  classNameLink: _react.PropTypes.string.isRequired,
  classNameIcon: _react.PropTypes.string.isRequired,
  classNameStateIcon: _react.PropTypes.string.isRequired,
  iconNamePrefix: _react.PropTypes.string.isRequired,
  iconNameStateVisible: _react.PropTypes.string.isRequired,
  iconNameStateHidden: _react.PropTypes.string.isRequired,
  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]).isRequired,
  closePeerContainers: _react.PropTypes.func.isRequired,
  icon: _react.PropTypes.string,
  label: _react.PropTypes.string.isRequired,
  externalLink: _react.PropTypes.bool,
  to: _react.PropTypes.string,
  content: _react.PropTypes.array
};

exports.default = Item;