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

	__webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Entry point of component
	/*
	 * src/main.js
	 * Author: H.Alper Tuna <halpertuna@gmail.com>
	 * Date: 23.03.2016
	 */

	exports.default = _MetisMenu2.default;
	// Embeds styles

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Container = __webpack_require__(3);

	var _Container2 = _interopRequireDefault(_Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Main container of MetisMenu
	 *
	 * Props come from top component
	 * @prop {string} iconClassPrefix - Prefix for all icon's style class name
	 * @prop {string} iconLevelDown - Icon name for state of collapsed containers
	 * @prop {string} iconLevelUp - Icon name for state of opened containers
	 * @prop {Object[]} content - Recursive menu stracture
	 */
	/**
	 * Renders component
	 * If props are not given, it sets default props for first depth container
	 * @return {Object} React component
	 */
	/*
	 * src/MetisMenu.js
	 * Author: H.Alper Tuna <halpertuna@gmail.com>
	 * Date: 23.03.2016
	 */

	var MetisMenu = function MetisMenu(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'metismenu' },
	    _react2.default.createElement(_Container2.default, {
	      className: 'metismenu',
	      iconClassPrefix: props.iconClassPrefix || 'fa fa-',
	      iconLevelDown: props.iconLevelDown || 'caret-left',
	      iconLevelUp: props.iconLevelUp || 'caret-down',
	      content: props.content || []
	    })
	  );
	};

	MetisMenu.propTypes = {
	  iconClassPrefix: _react.PropTypes.string,
	  iconLevelDown: _react.PropTypes.string,
	  iconLevelUp: _react.PropTypes.string,
	  content: _react.PropTypes.array
	};

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
	 * @prop {Object[]} content - Recursive menu stracture (It also comes from top to first container
	 * depth)
	 */
	var Container = function (_Component) {
	  _inherits(Container, _Component);

	  function Container() {
	    _classCallCheck(this, Container);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Container).call(this));

	    _this.closeChildContainers = _this.closeChildContainers.bind(_this);
	    return _this;
	  }
	  /**
	   * To close all item's submenu containers except sender item
	   */


	  _createClass(Container, [{
	    key: 'closeChildContainers',
	    value: function closeChildContainers() {
	      if (!this.props.content) return;

	      this.items.forEach(function (item) {
	        item.closeContainer();
	      });
	    }
	    /**
	     * Renders container block and menu items of it
	     *
	     * Also sends closeChildContainer method reference to props of items,
	     * to make them able to close each others submenu container
	     * when they are opened
	     * @return {Object} React component
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var className = 'metismenu-container';
	      if (this.props.visible) className += ' visible';

	      this.items = [];

	      return _react2.default.createElement(
	        'ul',
	        { className: className },
	        this.props.content.map(function (item, i) {
	          return _react2.default.createElement(_Item2.default, _extends({
	            key: i,
	            ref: function ref(r) {
	              _this2.items[i] = r;
	            },
	            closePeerContainers: _this2.closeChildContainers,
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

	Container.propTypes = {
	  iconClassPrefix: _react.PropTypes.string,
	  iconLevelDown: _react.PropTypes.string,
	  iconLevelUp: _react.PropTypes.string,
	  visible: _react.PropTypes.bool,
	  content: _react.PropTypes.array
	};

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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contributor: Layne Anderson
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17.08.2016
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
	 * @prop {boolean} externalLink - (optional) if true href opens in new tab/window
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

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this));

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
	     * Change container's visibility state to true and close peer items container
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
	     * Change container's visibility state to false and close submenu too
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
	      var _this2 = this;

	      var thisHasLevel = this.hasLevel();
	      var iconClassName = 'metismenu-icon  ' + this.props.iconClassPrefix + this.props.icon;

	      var href = void 0;
	      var onClick = void 0;
	      var iconLevel = void 0;
	      var target = void 0;

	      if (thisHasLevel) {
	        var className = 'metismenu-iconlevel ' + this.props.iconClassPrefix;
	        className += this.state.containerVisibility ? this.props.iconLevelUp : this.props.iconLevelDown;

	        href = '#';
	        onClick = this.toggleContainer;
	        iconLevel = _react2.default.createElement('span', { className: className });
	      } else {
	        href = this.props.href;
	        onClick = false;
	        iconLevel = null;
	      }

	      if (this.props.externalLink) {
	        target = '_blank';
	      } else {
	        target = '';
	      }

	      return _react2.default.createElement(
	        'li',
	        { className: 'metismenu-item' },
	        _react2.default.createElement(
	          'a',
	          { target: target, href: href, onClick: onClick },
	          _react2.default.createElement('span', { className: iconClassName }),
	          this.props.label,
	          iconLevel
	        ),
	        thisHasLevel && _react2.default.createElement(_Container2.default, {
	          ref: function ref(r) {
	            _this2.container = r;
	          },
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

	Item.propTypes = {
	  iconClassPrefix: _react.PropTypes.string,
	  iconLevelDown: _react.PropTypes.string,
	  iconLevelUp: _react.PropTypes.string,
	  closePeerContainers: _react.PropTypes.func,
	  icon: _react.PropTypes.string,
	  label: _react.PropTypes.string,
	  externalLink: _react.PropTypes.bool,
	  href: _react.PropTypes.string,
	  content: _react.PropTypes.array
	};

	exports.default = Item;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".metismenu {\n  width: 300px;\n}\n.metismenu > .metismenu-container {\n  background: #CCC;\n}\n.metismenu > .metismenu-container > .metismenu-item > A {\n  line-height: 2.2em;\n}\n.metismenu > .metismenu-container > .metismenu-item > A .metismenu-iconlevel {\n  line-height: 2.2em;\n}\n.metismenu-container,\n.metismenu-item {\n  margin: 0;\n  padding: 0;\n}\n.metismenu-container {\n  background: #DDD;\n  list-style: none;\n}\n.metismenu-container .metismenu-container {\n  display: none;\n}\n.metismenu-container .metismenu-container A {\n  padding-left: 1em;\n}\n.metismenu-container .metismenu-container .metismenu-container A {\n  padding-left: 2em;\n}\n.metismenu-container.visible {\n  display: block;\n}\n.metismenu-item > A {\n  color: #555;\n  display: block;\n  line-height: 1.8em;\n  text-decoration: none;\n}\n.metismenu-item > A:hover {\n  background: #EEE;\n  color: #333;\n}\n.metismenu-icon {\n  display: inline-block;\n  text-align: center;\n  width: 2.2em;\n}\nSPAN.metismenu-iconlevel {\n  float: right;\n  line-height: 1.8em;\n  text-align: center;\n  width: 2.2em;\n}\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;