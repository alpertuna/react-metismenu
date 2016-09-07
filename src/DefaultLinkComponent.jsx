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
 * @prop {boolean} props.target - Specifies external or not
 * @prop {string} props.href - Href address to link
 * @prop {function} props.onClick - For collapable items, toggle callback
 * @prop {React.Component} props.children - Contents of link (label, icons..)
 */
const DefaultLinkComponent = props => (
  <a className="metismenu-link" target={props.target} href={props.href} onClick={props.onClick}>
    {props.children}
  </a>
);

DefaultLinkComponent.propTypes = {
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.boolean,
  ]),
  href: PropTypes.string,
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.boolean,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
};

export default DefaultLinkComponent;
