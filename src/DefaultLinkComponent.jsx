/**
 * src/Link.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 07.09.2016
 */

import React, { PropTypes } from 'react';

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
const DefaultLinkComponent = props => (
  <a
    className={props.className}
    target={props.target}
    href={props.to}
    onClick={props.toggleSubMenu}
  >
    {props.children}
  </a>
);

DefaultLinkComponent.propTypes = {
  className: PropTypes.string.isRequired,
  target: PropTypes.string,
  to: PropTypes.string,
  toggleSubMenu: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default DefaultLinkComponent;
