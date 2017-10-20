/**
 * src/components/MetisMenu.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

/* eslint react/forbid-prop-types: [ "error", { forbid: [ "any", "array" ] } ] */

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import classnames from 'classnames';
import Ajax from 'simple-ajax';
import Container from '../containers/Container';
import Link from './DefaultLink';
import internalReducers from '../reducers/internal';
import {
  updateContent,
  changeActiveLinkId,
  changeActiveLinkTo,
  changeActiveLinkLabel,
  changeActiveLinkFromLocation,
} from '../actions/content';
import { updateListener } from '../actions/emitters';

let lastReduxUid = -1;

class MetisMenu extends React.Component {
  constructor(props) {
    super(props);

    lastReduxUid += 1;
    this.reduxUid = lastReduxUid;
    this.useExternalReduxStore = props.useExternalReduxStore;
    this.reduxStoreName = props.reduxStoreName;
    if (this.useExternalReduxStore) {
      this.store = this.useExternalReduxStore;
    } else {
      this.store = createStore(internalReducers);
    }

    if (props.onSelected) {
      this.store.dispatch(updateListener(this.reduxUid, props.onSelected));
    }

    this.LinkComponent = props.LinkComponent;

    if (props.content) {
      this.updateContent(props.content);
      this.updateActiveLink(props);
    } else if (props.ajax) {
      this.updateRemoteContent(props);
    }

    this.classStore = {
      classMainWrapper: classnames(
        { metismenu: !props.noBuiltInClassNames },
        props.className,
      ),
      classContainer: typeof props.classNameContainer === 'function'
        ? props.classNameContainer
        : classnames(
          { 'metismenu-container': !props.noBuiltInClassNames },
          props.classNameContainer,
        ),
      classContainerVisible: classnames(
        { visible: !props.noBuiltInClassNames },
        props.classNameContainerVisible,
      ),
      classItem: classnames(
        { 'metismenu-item': !props.noBuiltInClassNames },
        props.classNameItem,
      ),
      classLink: classnames(
        { 'metismenu-link': !props.noBuiltInClassNames },
        props.classNameLink,
      ),
      classItemActive: props.classNameItemActive,
      classItemHasActiveChild: props.classNameItemHasActiveChild,
      classItemHasVisibleChild: props.classNameItemHasVisibleChild,
      classLinkActive: classnames(
        { active: !props.noBuiltInClassNames },
        props.classNameLinkActive,
      ),
      classLinkHasActiveChild: classnames(
        { 'has-active-child': !props.noBuiltInClassNames },
        props.classNameLinkHasActiveChild,
      ),
      classIcon: classnames(
        { 'metismenu-icon': !props.noBuiltInClassNames },
        props.classNameIcon,
      ),
      classStateIcon: classnames(
        { 'metismenu-state-icon': !props.noBuiltInClassNames },
        props.classNameStateIcon,
      ),

      iconNamePrefix: props.iconNamePrefix,
      iconNameStateHidden: props.iconNameStateHidden,
      iconNameStateVisible: props.iconNameStateVisible,
    };
  }

  getChildContext() {
    return {
      classStore: this.classStore,
      LinkComponent: this.LinkComponent,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.content !== nextProps.content) {
      this.updateContent(nextProps.content);
    }

    if (this.props.ajax !== nextProps.ajax) {
      this.updateRemoteContent(nextProps);
    } else if (
      this.props.activeLinkId !== nextProps.activeLinkId ||
      this.props.activeLinkTo !== nextProps.activeLinkTo ||
      this.props.activeLinkLabel !== nextProps.activeLinkLabel ||
      this.props.activeLinkFromLocation !== nextProps.activeLinkFromLocation
    ) {
      this.updateActiveLink(nextProps);
    }
  }

  changeActiveLinkId(value) {
    this.store.dispatch(changeActiveLinkId(this.reduxUid, value));
  }

  changeActiveLinkTo(value) {
    this.store.dispatch(changeActiveLinkTo(this.reduxUid, value));
  }

  changeActiveLinkLabel(value) {
    this.store.dispatch(changeActiveLinkLabel(this.reduxUid, value));
  }

  changeActiveLinkFromLocation() {
    this.store.dispatch(changeActiveLinkFromLocation(this.reduxUid));
  }

  updateActiveLink(props) {
    if (props.activeLinkId) this.changeActiveLinkId(props.activeLinkId);
    else if (props.activeLinkTo) this.changeActiveLinkTo(props.activeLinkTo);
    else if (props.activeLinkLabel) this.changeActiveLinkLabel(props.activeLinkLabel);
    else if (props.activeLinkFromLocation) this.changeActiveLinkFromLocation();
  }

  updateRemoteContent(props) {
    const ajax = new Ajax(props.ajax);
    ajax.on('success', (event) => {
      let content;
      const { target: { responseText } } = event.target.responseText;
      try {
        content = JSON.parse(responseText);
      } catch (e) {
        throw new Error(`MetisMenu: Ajax response expected to be json, but got; ${responseText}`);
      }
      this.updateContent(content);
      this.updateActiveLink(props);
    });
    ajax.send();
  }

  updateContent(content) {
    this.store.dispatch(updateContent(this.reduxUid, content));
  }

  render() {
    const mainWrapper = (
      <div className={this.classStore.classMainWrapper}>
        <Container
          reduxStoreName={this.reduxStoreName}
          reduxUid={this.reduxUid}
        />
      </div>
    );

    if (this.useExternalReduxStore) {
      return mainWrapper;
    }

    return (
      <Provider store={this.store}>
        {mainWrapper}
      </Provider>
    );
  }
}

MetisMenu.defaultProps = {
  content: [],
  ajax: null,
  LinkComponent: Link,
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
  activeLinkId: null,
  activeLinkTo: null,
  activeLinkLabel: null,
  activeLinkFromLocation: false,
  onSelected: null,
  useExternalReduxStore: null,
  reduxStoreName: 'metisMenuStore',
};

MetisMenu.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  ajax: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),

  LinkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),

  noBuiltInClassNames: PropTypes.bool,
  className: PropTypes.string,
  classNameContainer: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  classNameContainerVisible: PropTypes.string,
  classNameItem: PropTypes.string,
  classNameItemActive: PropTypes.string,
  classNameItemHasActiveChild: PropTypes.string,
  classNameItemHasVisibleChild: PropTypes.string,
  classNameLink: PropTypes.string,
  classNameLinkActive: PropTypes.string,
  classNameLinkHasActiveChild: PropTypes.string,
  classNameIcon: PropTypes.string,
  classNameStateIcon: PropTypes.string,
  iconNamePrefix: PropTypes.string,
  iconNameStateHidden: PropTypes.string,
  iconNameStateVisible: PropTypes.string,

  activeLinkId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  activeLinkTo: PropTypes.string,
  activeLinkLabel: PropTypes.string,
  activeLinkFromLocation: PropTypes.bool,

  onSelected: PropTypes.func,
  useExternalReduxStore: PropTypes.object,
  reduxStoreName: PropTypes.string,
};

MetisMenu.childContextTypes = {
  classStore: PropTypes.object.isRequired,
  LinkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

export default MetisMenu;
