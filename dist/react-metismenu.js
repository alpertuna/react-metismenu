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

	exports.default = _MetisMenu2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Container = __webpack_require__(3);

	var _Container2 = _interopRequireDefault(_Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MetisMenu = function (_Component) {
	    _inherits(MetisMenu, _Component);

	    function MetisMenu() {
	        _classCallCheck(this, MetisMenu);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MetisMenu).apply(this, arguments));
	    }

	    _createClass(MetisMenu, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'metismenu' },
	                _react2.default.createElement(_Container2.default, _extends({}, this.props, { className: 'metismenu' }))
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = function (_Component) {
	    _inherits(Container, _Component);

	    function Container() {
	        _classCallCheck(this, Container);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
	    }

	    _createClass(Container, [{
	        key: 'closeChildContainers',
	        value: function closeChildContainers(senderIndex) {
	            for (var i in this.refs) {
	                if (i == senderIndex) continue;
	                this.refs[i].closeContainer();
	            }
	        }
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
	                        closeFriendContainers: _this2.closeChildContainers.bind(_this2, i)
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

/***/ }
/******/ ])
});
;