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
 * Props come from Item component
 * @prop {boolean} [props.target] - Specifies external or not
 * @prop {string} [props.to] - Href address to link
 * @prop {function} [props.toggleSubMenu] - For collapable items, toggle callback
 * @prop {React.Component} props.children - Contents of link (label, icons..)
 */
const DefaultLinkComponent = props => (
  <a className="metismenu-link" target={props.target} href={props.to} onClick={props.toggleSubMenu}>
    {props.children}
  </a>
);

DefaultLinkComponent.propTypes = {
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.boolean,
  ]),
  to: PropTypes.string,
  toggleSubMenu: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.boolean,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default DefaultLinkComponent;
