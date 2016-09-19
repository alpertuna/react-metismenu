/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Container from '../containers/Container';
import Link from './DefaultLink';

const Item = ({
  classStore,
  id,
  icon,
  label,
  to,
  externalLink,
  hasSubMenu,
  active,
  subMenuVisibility,
  toggleSubMenu,
  activateMe,
}) => (
  <li className={classStore.classItem}>
    <Link
      className={classStore.classLink}
      classNameActive={classStore.classLinkActive}
      active={active}
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
    </Link>
    {hasSubMenu && <Container
      classStore={classStore}
      itemId={id}
      visible={subMenuVisibility}
    />}
  </li>
);

Item.propTypes = {
  classStore: PropTypes.object.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
  externalLink: PropTypes.bool,
  hasSubMenu: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  subMenuVisibility: PropTypes.bool.isRequired,
  toggleSubMenu: PropTypes.func,
  activateMe: PropTypes.func.isRequired,
};

export default Item;
