(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactMetismenu"] = factory(require("react"));
	else
		root["ReactMetismenu"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MetisMenu = __webpack_require__(1);

	var _MetisMenu2 = _interopRequireDefault(_MetisMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Entry point of component
	exports.default = _MetisMenu2.default; /*
	                                        * src/main.js
	                                        * Author: H.Alper Tuna <halpertuna@gmail.com>
	                                        * Date: 23.03.2016
	                                        */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Container = __webpack_require__(3);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Item = __webpack_require__(4);

	var _Item2 = _interopRequireDefault(_Item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/Container.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 23.03.2016
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	/**
	 * Item Container / Submenu Class
	 *
	 * Containers are levels of menu, and keep items.
	 * Also provides comminication between items to close each other's sub menu levels
	 *
	 * Props come from top component
	 * @prop {string} iconClassPrefix - Prefix for all icon's style class name
	 * @prop {string} iconLevelDown - Icon name for state of collapsed containers
	 * @prop {string} iconLevelUp - Icon name for state of opened containers
	 *
	 * Props come from parent Item
	 * @prop {boolean} visible - State of container visibility
	 * @prop {Object[]} content - Recursive menu stracture (It also comes from top to first container depth)
	 */

	var Container = function (_Component) {
	    _inherits(Container, _Component);

	    function Container() {
	        _classCallCheck(this, Container);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
	    }

	    _createClass(Container, [{
	        key: 'closeChildContainers',

	        /**
	         * To close all item's submenu containers except sender item
	         * @param {number} senderIndex - Index of sender menu item
	         */
	        value: function closeChildContainers(senderIndex) {
	            for (var i in this.refs) {
	                if (i == senderIndex) continue;
	                this.refs[i].closeContainer();
	            }
	        }
	        /**
	         * Renders container block and menu items of it
	         *
	         * Also sends closeChildContainer method reference to props of items,
	         * to make them able to close each others submenu container
	         * when they are opened
	         * @return Object React component
	         */

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var className = 'metismenu-container';
	            if (this.props.visible) className += ' visible';

	            return _react2.default.createElement(
	                'ul',
	                { className: className },
	                this.props.content.map(function (item, i) {
	                    return _react2.default.createElement(_Item2.default, _extends({
	                        key: i,
	                        ref: i,
	                        closeFriendContainers: _this2.closeChildContainers.bind(_this2, i),
	                        iconClassPrefix: _this2.props.iconClassPrefix,
	                        iconLevelDown: _this2.props.iconLevelDown,
	                        iconLevelUp: _this2.props.iconLevelUp
	                    }, item));
	                })
	            );
	        }
	    }]);

	    return Container;
	}(_react.Component);

	exports.default = Container;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Container = __webpack_require__(3);

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
	         * @return Object React component
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
	                    iconLevelUp: this.props.iconLevelDown,
	                    content: this.props.content
	                })
	            );
	        }
	    }]);

	    return Item;
	}(_react.Component);

	exports.default = Item;

/***/ }
/******/ ])
});
;