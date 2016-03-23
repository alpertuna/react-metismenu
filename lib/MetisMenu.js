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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/MetisMenu.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 23.03.2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Main container of MetisMenu
 *
 * Props come from top component
 * @prop {string} iconClassPrefix - Prefix for all icon's style class name
 * @prop {string} iconLevelDown - Icon name for state of collapsed containers
 * @prop {string} iconLevelUp - Icon name for state of opened containers
 * @prop {Object[]} content - Recursive menu stracture
 */

var MetisMenu = function (_Component) {
    _inherits(MetisMenu, _Component);

    function MetisMenu() {
        _classCallCheck(this, MetisMenu);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MetisMenu).apply(this, arguments));
    }

    _createClass(MetisMenu, [{
        key: 'render',

        /**
         * Renders component
         * If props are not given, it sets default props for first depth container
         * @return Object React component
         */
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'metismenu' },
                _react2.default.createElement(_Container2.default, {
                    className: 'metismenu',
                    iconClassPrefix: this.props.iconClassPrefix || 'fa fa-',
                    iconLevelDown: this.props.iconLevelDown || 'caret-left',
                    iconLevelUp: this.props.iconLevelUp || 'caret-down',
                    content: this.props.content || []
                })
            );
        }
    }]);

    return MetisMenu;
}(_react.Component);

exports.default = MetisMenu;