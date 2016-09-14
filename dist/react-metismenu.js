(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactMetismenu"] = factory(require("react"));
	else
		root["ReactMetismenu"] = factory(root["react"]);
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

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Container = __webpack_require__(3);

	var _Container2 = _interopRequireDefault(_Container);

	var _DefaultLinkComponent = __webpack_require__(5);

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
	 * Containers are levels of menu, and keep items. Refers to <ul>.
	 * Also provides comminication between items to close each other's sub menu levels
	 * @extends React.Component
	 */
	var Container = function (_Component) {
	  _inherits(Container, _Component);

	  /**
	   * Creates item container.
	   *
	   * Props come from top component
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
	   * Props come from parent Item
	   * @prop {boolean} [props.visible] - State of container visibility
	   * @prop {Object[]} props.content - Recursive menu stracture (It also comes from top
	   * to first container depth)
	   */
	  function Container() {
	    _classCallCheck(this, Container);

	    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));

	    _this.closeChildContainers = _this.closeChildContainers.bind(_this);
	    return _this;
	  }
	  /**
	   * Closes all sub containers
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
	     * @return {Object} React component
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var className = this.props.classNameContainer;
	      if (this.props.visible) className += ' ' + this.props.classNameContainerVisible;

	      this.items = [];

	      return _react2.default.createElement(
	        'ul',
	        { className: className },
	        this.props.content.map(function (item, i) {
	          return _react2.default.createElement(_Item2.default, _extends({
	            key: i,
	            ref: function ref(r) {
	              if (r !== null) _this2.items.push(r);
	            },
	            closePeerContainers: _this2.closeChildContainers,
	            classNameContainer: _this2.props.classNameContainer,
	            classNameContainerVisible: _this2.props.classNameContainerVisible,
	            classNameItem: _this2.props.classNameItem,
	            classNameLink: _this2.props.classNameLink,
	            classNameIcon: _this2.props.classNameIcon,
	            classNameStateIcon: _this2.props.classNameStateIcon,
	            iconNamePrefix: _this2.props.iconNamePrefix,
	            iconNameStateVisible: _this2.props.iconNameStateVisible,
	            iconNameStateHidden: _this2.props.iconNameStateHidden,
	            LinkComponent: _this2.props.LinkComponent
	          }, item));
	        })
	      );
	    }
	  }]);

	  return Container;
	}(_react.Component);

	Container.propTypes = {
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
	  visible: _react.PropTypes.bool,
	  content: _react.PropTypes.array.isRequired
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Default Item Link Class
	 *
	 * @constructor
	 * @extends React.Component
	 *
	 * Props come from top component
	 * @prop {string} props.className - Class name for links in items (a)
	 *
	 * Props come from Item component
	 * @prop {boolean} [props.target] - Specifies external or not
	 * @prop {string} [props.to] - Href address to link
	 * @prop {function} [props.toggleSubMenu] - For collapable items, toggle callback
	 * @prop {React.Component} props.children - Contents of link (label, icons..)
	 */
	var DefaultLinkComponent = function DefaultLinkComponent(props) {
	  return _react2.default.createElement(
	    'a',
	    {
	      className: props.className,
	      target: props.target,
	      href: props.to,
	      onClick: props.toggleSubMenu
	    },
	    props.children
	  );
	}; /**
	    * src/Link.jsx
	    * Author: H.Alper Tuna <halpertuna@gmail.com>
	    * Date: 07.09.2016
	    */

	DefaultLinkComponent.propTypes = {
	  className: _react.PropTypes.string.isRequired,
	  target: _react.PropTypes.string,
	  to: _react.PropTypes.string,
	  toggleSubMenu: _react.PropTypes.func,
	  children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.element]).isRequired
	};

	exports.default = DefaultLinkComponent;

/***/ }
/******/ ])
});
;