'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _simpleAjax = require('simple-ajax');

var _simpleAjax2 = _interopRequireDefault(_simpleAjax);

var _Container = require('../containers/Container');

var _Container2 = _interopRequireDefault(_Container);

var _DefaultLink = require('./DefaultLink');

var _DefaultLink2 = _interopRequireDefault(_DefaultLink);

var _internal = require('../reducers/internal');

var _internal2 = _interopRequireDefault(_internal);

var _content = require('../actions/content');

var _emitters = require('../actions/emitters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/components/MetisMenu.jsx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 16.09.2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint react/forbid-prop-types: [ "error", { forbid: [ "any", "array" ] } ] */

var lastReduxUid = -1;

var MetisMenu = function (_React$Component) {
  _inherits(MetisMenu, _React$Component);

  function MetisMenu(props) {
    _classCallCheck(this, MetisMenu);

    var _this = _possibleConstructorReturn(this, (MetisMenu.__proto__ || Object.getPrototypeOf(MetisMenu)).call(this, props));

    lastReduxUid += 1;
    _this.reduxUid = lastReduxUid;
    _this.useExternalReduxStore = props.useExternalReduxStore;
    _this.reduxStoreName = props.reduxStoreName;
    if (_this.useExternalReduxStore) {
      _this.store = _this.useExternalReduxStore;
    } else {
      _this.store = (0, _redux.createStore)(_internal2.default);
    }

    if (props.onSelected) {
      _this.store.dispatch((0, _emitters.updateListener)(_this.reduxUid, props.onSelected));
    }

    _this.LinkComponent = props.LinkComponent;

    if (props.content) {
      _this.updateContent(props.content);
      _this.updateActiveLink(props);
    } else if (props.ajax) {
      _this.updateRemoteContent(props);
    }

    _this.classStore = {
      classMainWrapper: (0, _classnames2.default)({ metismenu: !props.noBuiltInClassNames }, props.className),
      classContainer: typeof props.classNameContainer === 'function' ? props.classNameContainer : (0, _classnames2.default)({ 'metismenu-container': !props.noBuiltInClassNames }, props.classNameContainer),
      classContainerVisible: (0, _classnames2.default)({ visible: !props.noBuiltInClassNames }, props.classNameContainerVisible),
      classItem: (0, _classnames2.default)({ 'metismenu-item': !props.noBuiltInClassNames }, props.classNameItem),
      classLink: (0, _classnames2.default)({ 'metismenu-link': !props.noBuiltInClassNames }, props.classNameLink),
      classItemActive: props.classNameItemActive,
      classItemHasActiveChild: props.classNameItemHasActiveChild,
      classItemHasVisibleChild: props.classNameItemHasVisibleChild,
      classLinkActive: (0, _classnames2.default)({ active: !props.noBuiltInClassNames }, props.classNameLinkActive),
      classLinkHasActiveChild: (0, _classnames2.default)({ 'has-active-child': !props.noBuiltInClassNames }, props.classNameLinkHasActiveChild),
      classIcon: (0, _classnames2.default)({ 'metismenu-icon': !props.noBuiltInClassNames }, props.classNameIcon),
      classStateIcon: (0, _classnames2.default)({ 'metismenu-state-icon': !props.noBuiltInClassNames }, props.classNameStateIcon),

      iconNamePrefix: props.iconNamePrefix,
      iconNameStateHidden: props.iconNameStateHidden,
      iconNameStateVisible: props.iconNameStateVisible
    };
    return _this;
  }

  _createClass(MetisMenu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        classStore: this.classStore,
        LinkComponent: this.LinkComponent
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.content !== nextProps.content) {
        this.updateContent(nextProps.content);
      }

      if (this.props.ajax !== nextProps.ajax) {
        this.updateRemoteContent(nextProps);
      } else {
        this.updateActiveLink(nextProps);
      }
    }
  }, {
    key: 'changeActiveLinkId',
    value: function changeActiveLinkId(value) {
      this.store.dispatch((0, _content.changeActiveLinkId)(this.reduxUid, value));
    }
  }, {
    key: 'changeActiveLinkTo',
    value: function changeActiveLinkTo(value) {
      this.store.dispatch((0, _content.changeActiveLinkTo)(this.reduxUid, value));
    }
  }, {
    key: 'changeActiveLinkLabel',
    value: function changeActiveLinkLabel(value) {
      this.store.dispatch((0, _content.changeActiveLinkLabel)(this.reduxUid, value));
    }
  }, {
    key: 'changeActiveLinkFromLocation',
    value: function changeActiveLinkFromLocation() {
      this.store.dispatch((0, _content.changeActiveLinkFromLocation)(this.reduxUid));
    }
  }, {
    key: 'updateActiveLink',
    value: function updateActiveLink(props) {
      if (props.activeLinkId) this.changeActiveLinkId(props.activeLinkId);else if (props.activeLinkTo) this.changeActiveLinkTo(props.activeLinkTo);else if (props.activeLinkLabel) this.changeActiveLinkLabel(props.activeLinkLabel);else if (props.activeLinkFromLocation) this.changeActiveLinkFromLocation();
    }
  }, {
    key: 'updateRemoteContent',
    value: function updateRemoteContent(props) {
      var _this2 = this;

      var ajax = new _simpleAjax2.default(props.ajax);
      ajax.on('success', function (event) {
        var content = void 0;
        var responseText = event.target.responseText;
        try {
          content = JSON.parse(responseText);
        } catch (e) {
          throw new Error('MetisMenu: Ajax response expected to be json, but got; ' + responseText);
        }
        _this2.updateContent(content);
        _this2.updateActiveLink(props);
      });
      ajax.send();
    }
  }, {
    key: 'updateContent',
    value: function updateContent(content) {
      this.store.dispatch((0, _content.updateContent)(this.reduxUid, content));
    }
  }, {
    key: 'render',
    value: function render() {
      var mainWrapper = _react2.default.createElement(
        'div',
        { className: this.classStore.classMainWrapper },
        _react2.default.createElement(_Container2.default, {
          reduxStoreName: this.reduxStoreName,
          reduxUid: this.reduxUid
        })
      );

      if (this.useExternalReduxStore) {
        return mainWrapper;
      }

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.store },
        mainWrapper
      );
    }
  }]);

  return MetisMenu;
}(_react2.default.Component);

MetisMenu.defaultProps = {
  content: [],
  ajax: null,
  LinkComponent: _DefaultLink2.default,
  noBuiltInClassNames: false,
  className: null,
  classNameContainer: null,
  classNameContainerVisible: null,
  classNameItem: null,
  classNameItemActive: null,
  classNameItemHasActiveChild: null,
  classNameItemHasVisibleChild: null,
  classNameLink: null,
  classNameLinkActive: null,
  classNameLinkHasActiveChild: null,
  classNameIcon: null,
  classNameStateIcon: null,
  iconNamePrefix: 'fa fa-',
  iconNameStateHidden: 'caret-left',
  iconNameStateVisible: 'caret-left rotate-minus-90',
  onSelected: null,
  useExternalReduxStore: null,
  reduxStoreName: 'metisMenuStore'
};

MetisMenu.propTypes = {
  content: _react.PropTypes.arrayOf(_react.PropTypes.object),
  ajax: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),

  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),

  noBuiltInClassNames: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  classNameContainer: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  classNameContainerVisible: _react.PropTypes.string,
  classNameItem: _react.PropTypes.string,
  classNameItemActive: _react.PropTypes.string,
  classNameItemHasActiveChild: _react.PropTypes.string,
  classNameItemHasVisibleChild: _react.PropTypes.string,
  classNameLink: _react.PropTypes.string,
  classNameLinkActive: _react.PropTypes.string,
  classNameLinkHasActiveChild: _react.PropTypes.string,
  classNameIcon: _react.PropTypes.string,
  classNameStateIcon: _react.PropTypes.string,
  iconNamePrefix: _react.PropTypes.string,
  iconNameStateHidden: _react.PropTypes.string,
  iconNameStateVisible: _react.PropTypes.string,

  /* activeLinkId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  activeLinkTo: PropTypes.string,
  activeLinkLabel: PropTypes.string,
  activeLinkFromLocation: PropTypes.bool,*/

  onSelected: _react.PropTypes.func,
  useExternalReduxStore: _react.PropTypes.object,
  reduxStoreName: _react.PropTypes.string
};

MetisMenu.childContextTypes = {
  classStore: _react.PropTypes.object.isRequired,
  LinkComponent: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]).isRequired
};

exports.default = MetisMenu;