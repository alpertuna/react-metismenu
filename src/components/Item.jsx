/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Container from '../containers/Container';

const Item = ({
  id,
  icon,
  label,
  to,
  externalLink,
  hasSubMenu,
  active,
  hasActiveChild,
  subMenuVisibility,
  toggleSubMenu,
  activateMe,
}, {
  classStore,
  LinkComponent,
}) => (
  <li
    className={classnames(
      classStore.classItem,
      active && classStore.classItemActive,
      hasActiveChild && classStore.classItemHasActiveChild,
      (hasSubMenu && subMenuVisibility) && classStore.classItemHasVisibleChild
    )}
  >
    <LinkComponent
      className={classStore.classLink}
      classNameActive={classStore.classLinkActive}
      classNameHasActiveChild={classStore.classLinkHasActiveChild}
      active={active}
      hasActiveChild={hasActiveChild}
      to={to}
      externalLink={externalLink}
      hasSubMenu={hasSubMenu}
      toggleSubMenu={toggleSubMenu}
      activateMe={activateMe}
    >
      <i className={classnames(classStore.classIcon, classStore.iconNamePrefix + icon)} />
      {label}
      {hasSubMenu && <i
        className={classnames(
          classStore.classStateIcon,
          classStore.iconNamePrefix + (
            subMenuVisibility
              ? classStore.iconNameStateVisible
              : classStore.iconNameStateHidden
          )
        )}
      />}
    </LinkComponent>
    {hasSubMenu && <Container
      submenu
      itemId={id}
      visible={subMenuVisibility}
    />}
  </li>
);

Item.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  icon: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
  to: PropTypes.string,
  externalLink: PropTypes.bool,
  hasSubMenu: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  hasActiveChild: PropTypes.bool.isRequired,
  subMenuVisibility: PropTypes.bool.isRequired,
  toggleSubMenu: PropTypes.func,
  activateMe: PropTypes.func.isRequired,
};

Item.contextTypes = {
  classStore: PropTypes.object.isRequired,
  LinkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

export default Item;
