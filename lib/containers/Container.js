'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Container = require('../components/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * src/containers/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

var mapStateToProps = function mapStateToProps(store, ownProps) {
  return {
    items: store[ownProps.reduxStoreName].content[ownProps.reduxUid].filter(function (item) {
      return item.parentId === ownProps.itemId;
    })
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Container2.default);