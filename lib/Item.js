'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Container.jsx');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
    _inherits(Item, _Component);

    function Item() {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).apply(this, arguments));

        _this.state = {
            containerVisibility: false
        };
        return _this;
    }

    _createClass(Item, [{
        key: 'hasLevel',
        value: function hasLevel() {
            return typeof this.props.content != 'undefined';
        }
    }, {
        key: 'isContainerClosed',
        value: function isContainerClosed() {
            return !this.state.containerVisibility;
        }
    }, {
        key: 'openContainer',
        value: function openContainer() {
            this.props.closeFriendContainers();
            this.setState({
                containerVisibility: true
            });
        }
    }, {
        key: 'closeContainer',
        value: function closeContainer() {
            if (this.hasLevel()) this.refs.container.closeChildContainers();
            this.setState({
                containerVisibility: false
            });
        }
    }, {
        key: 'toggleContainer',
        value: function toggleContainer() {
            if (this.isContainerClosed()) {
                this.openContainer();
            } else {
                this.closeContainer();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var thisHasLevel = this.hasLevel();
            var iconClassPrefix = this.props.iconClassPrefix || 'fa fa-';
            if (thisHasLevel) {
                var iconLevelDown = this.props.iconLevelDown || 'caret-left';
                var iconLevelUp = this.props.iconLevelUp || 'caret-down';
                var iconLevel = this.state.containerVisibility ? iconLevelUp : iconLevelDown;
            }

            return _react2.default.createElement(
                'li',
                { className: 'metismenu-item' },
                _react2.default.createElement(
                    'a',
                    {
                        href: thisHasLevel ? 'javascript:void(0);' : this.props.href,
                        onClick: thisHasLevel ? this.toggleContainer.bind(this) : false
                    },
                    _react2.default.createElement('span', { className: 'metismenu-icon ' + iconClassPrefix + this.props.icon }),
                    this.props.label,
                    thisHasLevel && _react2.default.createElement('span', { className: 'metismenu-iconlevel ' + iconClassPrefix + iconLevel })
                ),
                thisHasLevel && _react2.default.createElement(_Container2.default, {
                    ref: 'container',
                    visible: this.state.containerVisibility,
                    content: this.props.content
                })
            );
        }
    }]);

    return Item;
}(_react.Component);

exports.default = Item;