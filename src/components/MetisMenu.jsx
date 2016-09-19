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
import Container from '../containers/Container';
import reducers from '../reducers';
import { updateContent } from '../actions/content';
import {
  changeActiveLinkId,
  changeActiveLinkTo,
  changeActiveLinkLabel,
  changeActiveLinkFromLocation,
} from '../actions/item-active-link';

class MetisMenu extends React.Component {
  constructor(props) {
    super(props);

    this.store = createStore(reducers);

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
      classLinkActive: classnames(
        { active: !props.noBuiltInClassNames },
        props.classNameLinkActive
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

  componentWillReceiveProps(nextProps) {
    if (this.props.content !== nextProps.content) {
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
          <Container classStore={this.classStore} />
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
  noBuiltInClassNames: PropTypes.bool,
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameContainerVisible: PropTypes.string,
  classNameItem: PropTypes.string,
  classNameLink: PropTypes.string,
  classNameLinkActive: PropTypes.string,
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

export default MetisMenu;
