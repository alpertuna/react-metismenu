[![Build Status](https://travis-ci.org/alpertuna/react-metismenu.svg?branch=master)](https://travis-ci.org/alpertuna/react-metismenu)
[![Coverage Status](https://coveralls.io/repos/github/alpertuna/react-metismenu/badge.svg)](https://coveralls.io/github/alpertuna/react-metismenu)
[![npm version](https://badge.fury.io/js/react-metismenu.svg)](https://badge.fury.io/js/react-metismenu)
[![peerDependencies Status](https://david-dm.org/alpertuna/react-metismenu/peer-status.svg)](https://david-dm.org/alpertuna/react-metismenu?type=peer)

[![NPM](https://nodei.co/npm/react-metismenu.png?compact=true)](https://nodei.co/npm/react-metismenu/)

# react-metismenu
A ready-to-use and simple menu component for [React](https://facebook.github.io/react/)

react-metismenu is under development now, It is time to contribute :blush:

**Important note:** After v0.4 `href` property of menu content has been changed to `to`

**Important note:** After v0.5 styles are not embedded anymore. Need to include in html source.

**Important note**: After v0.6 names of props about css classes has been changed.

Demo
====
Here is a simple demo without any customizations. [Go to demo](https://alpertuna.github.io/react-metismenu/)

`react-metismenu-router-link` extension to use with `react-router`. [Go to demo](https://alpertuna.github.io/react-metismenu-router-link) - [Extension Page](https://github.com/alpertuna/react-metismenu-router-link)

Install
=======

```console
npm install react-metismenu
```
In your project you may use `--save` or `--save-dev` options of npm

Usage
=====

With Ecma Script 6 and React Loaders
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'react-metismenu';

ReactDOM.render(<Menu />, document.getElementById('dom_id'));
```

Without Loaders (ES5)
```javascript
const React = require('react');
const ReactDOM = require('react-dom');
const Menu = require('react-metismenu');

ReactDOM.render(
    React.createElement(Menu),
    document.getElementById('dom_id')
);
```

Also you should embed core css file to your html for menu to work.
```html
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/alpertuna/react-metismenu/master/dist/react-metismenu.min.css" />
```
You can find this css in your `node_modules/react-metismenu/dist` to embed locally.

Properties
==========
**MetisMenu (React component) properties**
- Main Properties
    * {Object[]} [`content`=[]] - It keeps all recursive structure of Metismenu


- To [Customize Styles](#customizing-styles)
    * {string} [`className`] - Class name for main metismenu wrapper
    * {string} [`classNameContainer`] - Class name for item container (ul)
    * {string} [`classNameContainerVisible`] - Additional class name when container is visible
    * {string} [`classNameItem`] - Class name for items in container (li)
    * {string} [`classNameLink`] - Class name for links in items (a)
    * {string} [`classNameIcon`] - Class name for link icons
    * {string} [`classNameStateIcon`] - Class name for state indicators of submenu
    * {boolean} [`noBuiltInClassNames`=false] - When true, core css class names won't be used
    * {string} [`iconNamePrefix`="fa fa-"] - Prefix for all icon's style class name
    * {string} [`iconNameStateHidden`="caret-left"] - Icon name for state of collapsed containers
    * {string} [`iconNameStateVisible`="caret-down"] - Icon name for state of opened containers


- To [Customize Link Components](#customizing-link-component)
    * {React.Component} [`LinkComponent`=DefaultLinkComponent] - Handles link components of all items

**Properties for each item in content**
* {string} `icon` - Icon class name of item
* {string} `label` - Label of item
* {string} [`to`] - Href address to link (if item has submenu, `to` property will be ignored by `DefaultLinkComponent`)
* {boolean} [`externalLink`] - If true link opens page in new tab/window
* {Object[]} [`content`] - Submenu of item

Example
=======

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'react-metismenu';

const content=[
    {
        icon: 'icon-class-name',
        label: 'Label of Item',
        to: '#a-link',
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                to: '#another-link',
            },
        ],
    },
];

ReactDOM.render(<Menu content={content} />, document.getElementById('root'));
```

Customizing Styles
==================
After rendering metismenu with recursive content, output dom structure will be like this;
```html
<div>             - main wrapper
  ====================================== Top container
  <ul>            - container
    <li>          - item
      <a>         - link
        <i />     - icon
        " "       - label
        <i />     - state icon (caret icon)
      </a>
      ---------------------------------- First depth sub container
      <ul>        - container
        <li>      - item
          <a>     - link
            <i /> - icon
            " "   - label
          </a>
        </li>
        ...
      </ul>
      ----------------------------------
    </li>
    ...
  </ul>
  ======================================
</div>
```

#### Overriding Styles
Metismenu with default setting adds built-in css class names.

These class names are, according to figure above;
- main wrapper - `metismenu`
- container - `metismenu-container` and `visible` for opened containers
- item - `metismenu-item`
- link - `metismenu-link`
- icon - `metismenu-icon`
- state icon - `metismenu-state-icon`

You can overide these class names to customize with your own css.

**Note:** Containers' default state is hidden and there is no assigned class to tell.

#### Using Your Own Class Names
You can tell metismenu to add your own class names by sending them as props.

Property names are, according to figure above;
- main wrapper - `className`
- container - `classNameContainer` and `classNameContainerVisible` for opened containers
- item - `classNameItem`
- link - `classNameLink`
- icon - `classNameIcon`
- state icon - `classNameStateIcon`

Using these props **not** overwrites built-in class names, just appends.
**Note:** Containers' default state is hidden and there is no prop to tell.

#### Icon Framework
By default, metismenu uses [Font Awesome](http://fontawesome.io/) for icons and prepends all icon names with `fa fa-`.

To use another icon framework, you can change prefix with `iconNamePrefix` prop of menu.

To change state icons (shows submenu is visible or not) you can use these props of menu;
- `iconNameStateVisible`
- `iconNameStateHidden`

These icons are also prepended by `iconNamePrefix`.

#### Not Using Built-in Styles
If you don't want use core styles you can remove them completely by setting `noBuiltInClassNames` prop `true`.
In this case you are responsable for all styling including visibility states of containers.

Customizing Link Components
===========================
You are able to change the link component of each item.
You may use another html tag, want to inject some properties or change operation logic. In this case, you can customize and use your own link component sending to `Menu` component as `LinkComponent` property.

#### Props to use in your Link Component
- {string} `className` - Class name comes from top component (a)
- {React.Component} `children` -  Ready to render content of link - contains icon, label and other stuff
- {string} [`to`] - Contains `to` info of the item comes from menu content object
- {string} [`target`] - If link is external, contains `_blank` string, otherwise `undefined`
- {function} [`toggleSubMenu`] - If item has submenu, returns toggle trigger callback, otherwise `undefined`

#### An Example
Defining CustomLink Component
```javascript
class CustomLink extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.toggleSubMenu) this.props.toggleSubMenu(e);
    else {
      // your own operation using "to"
      // myGotoFunc(this.props.to);
    }
  }

  render() {
    return (
      <button className="metismenu-link" onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
};
```
Injecting CustomLink into Menu component
```javascript
<Menu content={menu} LinkComponent={CustomLink} />
```
Also, as another example, you can look into [DefaultLinkComponent](https://github.com/alpertuna/react-metismenu/blob/master/src/DefaultLinkComponent.jsx) source.

Extensions
==========
## react-metismenu-router-link
If you use `react-router`, this extension does the job.
- Npm package `react-metismenu-router-link`
- [Source page](https://github.com/alpertuna/react-metismenu-router-link)
- [Demo page](https://alpertuna.github.io/react-metismenu-router-link)


Development / Contributing
==========================
If you like to add or improve something, follow these steps.

```console
# Change dir to your playground folder and clone repository.
git clone git@github.com:alpertuna/react-metismenu.git

# Enter cloned folder and install necessary development node libraries
cd react-metismenu
npm install
```

#### Folders and Files
 - **`src`** folder keeps all source files of `react-metismenu`
 - **`less`** folder keeps source style files.
 - **`dev`** is playground folder to develop `react-metismenu`.

Under **`dev`** folder, `index.html` is index file of our web server. You don't need to touch here if you don't want to add any other external js or css files.
`App.js` file is entry point for our react application, and you can test your alterations in here. There is a working example in `App.js` and it imports `react-metismenu` directly from source code, that's why there is no need to build it while developing. Similarly less folder is imported directly through less compiler pipe.

#### To run dev server,
```console
npm run dev-server
# or shortly
npm start
```
And open `localhost:8080` in browser.
Dev server uses webpack and it has hot modul replecament plugins, so when you change and save any source file, it will rebuild virtual bundle and send signal browser to refresh page automaticly.

#### Source Code Writing Standarts
For source code quality, I applied Airbnb rules. Because it focuses on React more than others.


#### After Develop,
```console
# TESTING
# Runs all necessary test scripts (linting and unit-testing)
npm test

# Or you can test specific parts of project
# Lints js files according to Airbnb rules using Eslint
npm run lint-confs
npm run lint-src
npm run lint-dev
# Runs unit test using Jest
npm run unit-test

# BUILDING
# Builds lib and dist files together
npm run build

# Or you can build them seperately
# Builds js and css dist files
npm run build-dist-js
npm run build-dist-js-min
npm run build-dist-css
npm run build-dist-css-min
# Builds lib files for npm
npm run build-lib

```
