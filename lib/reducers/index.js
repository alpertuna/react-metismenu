'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                   * src/reducers/item.js
                                                                                                                                                                                                                                                   * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                   * Date: 16.09.2016
                                                                                                                                                                                                                                                   */

/* eslint-env browser */

var _itemSubMenu = require('../actions/item-sub-menu');

var _flattenContent = require('./flattenContent');

var _flattenContent2 = _interopRequireDefault(_flattenContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var item = function item(state, action) {
  switch (action.type) {
    case 'HIDE_SUBMENU':
    case 'SHOW_SUBMENU':
    case 'TOGGLE_SUBMENU':
      {
        if (state.id === action.id) {
          return Object.assign({}, state, {
            subMenuVisibility: action.subMenuVisibility
          });
        }

        return Object.assign({}, state, {
          subMenuVisibility: action.trace.indexOf(state.id) !== -1
        });
      }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK':
      {
        return Object.assign({}, state, { active: state.id === action.id });
      }
    default:
      {
        return state;
      }
  }
};

var findItem = function findItem(content, value) {
  var prop = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];
  return content.find(function (i) {
    return i[prop] === value;
  });
};

var content = function content() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'HIDE_SUBMENU':
      {
        return state.map(function (i) {
          return item(i, action);
        });
      }
    case 'SHOW_SUBMENU':
      {
        var _ret = function () {
          var trace = action.id ? findItem(state, action.id).trace : [];
          return {
            v: state.map(function (i) {
              return item(i, Object.assign({ trace: trace }, action));
            })
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    case 'TOGGLE_SUBMENU':
      {
        var _ret2 = function () {
          var _findItem = findItem(state, action.id);

          var subMenuVisibility = _findItem.subMenuVisibility;
          var trace = _findItem.trace;

          return {
            v: state.map(function (i) {
              return item(i, Object.assign({
                subMenuVisibility: !subMenuVisibility,
                trace: trace
              }, action));
            })
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK':
      {
        var _ret3 = function () {
          var activeItem = void 0;
          if (action.type === 'CHANGE_ACTIVE_LINK_FROM_LOCATION') {
            (function () {
              var locationSets = [window.location.pathname + window.location.search, // /path?search
              window.location.hash, // #hash
              window.location.pathname + window.location.search + window.location.hash];
              activeItem = state.find(function (i) {
                return locationSets.indexOf(i.to) !== -1;
              });
            })();
          } else {
            activeItem = findItem(state, action.value, action.propName);
          }

          if (!activeItem) return {
              v: state
            };

          var _activeItem = activeItem;
          var id = _activeItem.id;
          var parentId = _activeItem.parentId;

          var stage = state.map(function (i) {
            return item(i, Object.assign({ id: id }, action));
          });
          return {
            v: content(stage, (0, _itemSubMenu.showSubMenu)(parentId))
          };
        }();

        if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
      }
    case 'UPDATE_CONTENT':
      {
        return (0, _flattenContent2.default)(action.content);
      }
    default:
      {
        return state;
      }
  }
};

exports.default = content;