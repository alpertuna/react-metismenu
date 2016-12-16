'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * @file reducers/content.js
                                                                                                                                                                                                                                                                               * @author H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                               * Date: 16.12.2016
                                                                                                                                                                                                                                                                               */

/* eslint-env browser */

var _content = require('../actions/content');

var _flattenContent = require('./flattenContent');

var _flattenContent2 = _interopRequireDefault(_flattenContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var item = function item(state, action) {
  switch (action.type) {
    case 'CHANGE_SUBMENU_VISIBILITY':
      {
        return Object.assign({}, state, {
          subMenuVisibility: state.id === action.id ? action.subMenuVisibility : action.trace.indexOf(state.id) !== -1
        });
      }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK':
      {
        return Object.assign({}, state, {
          active: state.id === action.id,
          hasActiveChild: action.trace.indexOf(state.id) !== -1
        });
      }
    default:
      {
        return state;
      }
  }
};

var findItem = function findItem(content, value, prop) {
  return content.find(function (i) {
    return i[prop] === value;
  });
};

var content = function content() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'UPDATE_CONTENT':
      {
        return (0, _flattenContent2.default)(action.content);
      }
    case 'CHANGE_SUBMENU_VISIBILITY':
      {
        return state.map(function (i) {
          return item(i, action);
        });
      }
    case 'CHANGE_ACTIVE_LINK_FROM_LOCATION':
    case 'CHANGE_ACTIVE_LINK':
      {
        var _ret = function () {
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

          // If metismenu user tries to activate non-exist item
          if (!activeItem) return {
              v: state
            };

          var _activeItem = activeItem,
              id = _activeItem.id,
              parentId = _activeItem.parentId,
              trace = _activeItem.trace;

          var stage = state.map(function (i) {
            return item(i, Object.assign({ id: id, trace: trace }, action));
          });

          // Trace also keeps parentId nonetheless it doesn't matter
          return {
            v: content(stage, (0, _content.changeSubMenuVisibility)(parentId, trace, true))
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    default:
      {
        return state;
      }
  }
};

exports.default = content;