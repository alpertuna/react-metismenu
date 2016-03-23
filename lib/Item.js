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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 23.03.2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

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
 * @prop {string} href - link address of item
 * @prop {Object[]} content - Recursive menu stracture
 *
 */

var Item = function (_Component) {
    _inherits(Item, _Component);

    /**
     * constructor
     * it sets first state of container's visibility
     */

    function Item() {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).apply(this, arguments));

        _this.state = {
            containerVisibility: false
        };
        return _this;
    }

    /**
     * To check this item has submenu
     * @return {boolean}
     */


    _createClass(Item, [{
        key: 'hasLevel',
        value: function hasLevel() {
            return typeof this.props.content != 'undefined';
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
         * Change container's visibility state to true and close peer items container
         */

    }, {
        key: 'openContainer',
        value: function openContainer() {
            this.props.closeFriendContainers();
            this.setState({
                containerVisibility: true
            });
        }
        /*
         * Change container's visibility state to false and close submenu too
         */

    }, {
        key: 'closeContainer',
        value: function closeContainer() {
            if (this.hasLevel()) this.refs.container.closeChildContainers();
            this.setState({
                containerVisibility: false
            });
        }
        /*
         * Toggles container visibility state
         */

    }, {
        key: 'toggleContainer',
        value: function toggleContainer() {
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

    }, {
        key: 'render',
        value: function render() {
            var thisHasLevel = this.hasLevel();
            var iconClassName = 'metismenu-icon ' + this.props.iconClassPrefix + this.props.icon;

            if (thisHasLevel) {
                var href = 'javascript:void(0);';
                var onClick = this.toggleContainer.bind(this);
                var iconLevel = _react2.default.createElement('span', { className: 'metismenu-iconlevel ' + this.props.iconClassPrefix + (this.state.containerVisibility ? this.props.iconLevelUp : this.props.iconLevelDown) });
            } else {
                var href = this.props.href;
                var onClick = false;
                var iconLevel = null;
            }

            return _react2.default.createElement(
                'li',
                { className: 'metismenu-item' },
                _react2.default.createElement(
                    'a',
                    { href: href, onClick: onClick },
                    _react2.default.createElement('span', { className: iconClassName }),
                    this.props.label,
                    iconLevel
                ),
                thisHasLevel && _react2.default.createElement(_Container2.default, {
                    ref: 'container',
                    visible: this.state.containerVisibility,

                    iconClassPrefix: this.props.iconClassPrefix,
                    iconLevelDown: this.props.iconLevelDown,
                    iconLevelUp: this.props.iconLevelUp,
                    content: this.props.content
                })
            );
        }
    }]);

    return Item;
}(_react.Component);

exports.default = Item;