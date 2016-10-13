/**
 * src/components/MetisMenu.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import classnames from 'classnames';
import Ajax from 'simple-ajax';
import isEqual from 'lodash.isequal';
import Container from '../containers/Container';
import Link from './DefaultLink';
import reducers from '../reducers';
import {
  updateContent,
  changeActiveLinkId,
  changeActiveLinkTo,
  changeActiveLinkLabel,
  changeActiveLinkFromLocation,
} from '../actions';


class MetisMenu extends React.Component {
  constructor(props) {
    super(props);

    this.store = createStore(reducers);

    this.LinkComponent = props.LinkComponent || Link;

    if (props.content) {
      this.updateContent(props.content);
      this.updateActiveLink(props);
    } else if (props.ajax) {
      this.updateRemoteContent(props);
    }

    this.classStore = {
      classMainWrapper: classnames(
        { metismenu: !props.noBuiltInClassNames },
        props.className
      ),
      classContainer: classnames(
        { 'metismenu-container': !props.noBuiltInClassNames },
        props.classNameContainer
      ),
      classSubmenuContainer: classnames(
        { 'metismenu-container': !props.noBuiltInClassNames },
        props.classNameSubmenuContainer || props.classNameContainer
      ),
      classContainerVisible: classnames(
        { visible: !props.noBuiltInClassNames },
        props.classNameContainerVisible
      ),
      classItem: classnames(
        { 'metismenu-item': !props.noBuiltInClassNames },
        props.classNameItem
      ),
      classLink: classnames(
        { 'metismenu-link': !props.noBuiltInClassNames },
        props.classNameLink
      ),
      classItemActive: props.classNameItemActive,
      classItemHasActiveChild: props.classNameItemHasActiveChild,
      classItemHasVisibleChild: props.classNameItemHasVisibleChild,
      classLinkActive: classnames(
        { active: !props.noBuiltInClassNames },
        props.classNameLinkActive
      ),
      classLinkHasActiveChild: classnames(
        { 'has-active-child': !props.noBuiltInClassNames },
        props.classNameLinkHasActiveChild
      ),
      classIcon: classnames(
        { 'metismenu-icon': !props.noBuiltInClassNames },
        props.classNameIcon
      ),
      classStateIcon: classnames(
        { 'metismenu-state-icon': !props.noBuiltInClassNames },
        props.classNameStateIcon
      ),

      iconNamePrefix: props.iconNamePrefix || 'fa fa-',
      iconNameStateHidden: props.iconNameStateHidden || 'caret-left',
      iconNameStateVisible: props.iconNameStateVisible || 'caret-left rotate-minus-90',
    };
  }

  getChildContext() {
    return {
      classStore: this.classStore,
      LinkComponent: this.LinkComponent,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.content, nextProps.content)) {
      this.updateContent(nextProps.content);
    }

    if (this.props.ajax !== nextProps.ajax) {
      this.updateRemoteContent(nextProps);
    } else {
      this.updateActiveLink(nextProps);
    }
  }

  changeActiveLinkId(value) {
    this.store.dispatch(changeActiveLinkId(value));
  }

  changeActiveLinkTo(value) {
    this.store.dispatch(changeActiveLinkTo(value));
  }

  changeActiveLinkLabel(value) {
    this.store.dispatch(changeActiveLinkLabel(value));
  }

  changeActiveLinkFromLocation() {
    this.store.dispatch(changeActiveLinkFromLocation());
  }

  updateActiveLink(props) {
    if (props.activeLinkId) this.changeActiveLinkId(props.activeLinkId);
    else if (props.activeLinkTo) this.changeActiveLinkTo(props.activeLinkTo);
    else if (props.activeLinkLabel) this.changeActiveLinkLabel(props.activeLinkLabel);
    else if (props.activeLinkFromLocation) this.changeActiveLinkFromLocation();
  }

  updateRemoteContent(props) {
    const ajax = new Ajax(props.ajax);
    ajax.on('success', event => {
      let content;
      const responseText = event.target.responseText;
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
    this.store.dispatch(updateContent(content));
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className={this.classStore.classMainWrapper}>
          <Container />
        </div>
      </Provider>
    );
  }
}

MetisMenu.propTypes = {
  content: PropTypes.array,
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
  classNameContainer: PropTypes.string,
  classNameSubmenuContainer: PropTypes.string,
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
};

MetisMenu.childContextTypes = {
  classStore: PropTypes.object.isRequired,
  LinkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

export default MetisMenu;
