[![Build Status](https://travis-ci.org/alpertuna/react-metismenu.svg?branch=master)](https://travis-ci.org/alpertuna/react-metismenu)
[![npm version](https://badge.fury.io/js/react-metismenu.svg)](https://badge.fury.io/js/react-metismenu)
[![peerDependencies Status](https://david-dm.org/alpertuna/react-metismenu/peer-status.svg)](https://david-dm.org/alpertuna/react-metismenu?type=peer)

[![NPM](https://nodei.co/npm/react-metismenu.png?compact=true)](https://nodei.co/npm/react-metismenu/)

# react-metismenu
A ready-to-use menu component for [React](https://facebook.github.io/react/)

react-metismenu is under development now, It is time to contribute :blush:


Install
=======

```sh
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
var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('react-metismenu');

ReactDOM.render(
    React.createElement(Menu),
    document.getElementById('dom_id')
);
```

Now, core css file is embed so that you don't need to add link.

Properties
==========
MetisMenu (React component) properties

* `iconClassPrefix` {string} - Prefix for all icon's style class (Default `fa fa-`)
* `iconLevelDown` {string} - Icon class name for state of collapsed sub menus (Default `caret-left`)
* `iconLevelUp` {string} - Icon class name for state of opened sub menus (Default: `caret-down`)
* `content` {Object[]} - It keeps all recursive structure of Metismenu

Properties for each item in content
* `icon` {string} - Icon class name of item
* `label` {string} - Label of item
* `externalLink` (boolean) - (optional) if true href opens in new tab/window
* `href` {string} - Link of item (if item has submenu, href property will be ignored)
* `content` {Object[]} - Submenu of item

Example
=======

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Menu from 'react-metismenu'

var content=[
    {
        icon: 'icon-class-name',
        label: 'Label of Item',
        href: '#a-link'
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                href: '#another-link'
            }
        ]
    },
];

ReactDOM.render(<Menu content={content} />, document.getElementById('root'));
```

Development / Contributing
==========================
If you like to add or improve something, follow these steps.

```sh
# Change dir to your playground folder and clone repository.
git clone git@github.com:alpertuna/react-metismenu.git

# Enter cloned folder and install necessary development node libraries
cd react-metismenu
npm install
```

#### Folders and Files
 - **`src`** folder keeps all source files of `react-metismenu`
 - `react-metismenu` uses less preprocessor for styling, and **`less`** folder keeps source style files.
 - **`dev`** is playground folder to develop `react-metismenu`.

Under **`dev`** folder, `index.html` is index file of our web server. You don't need to touch here if you don't want to add any other external js or css files.
`App.js` file is entry point for our react application, and you can test your alterations in here. There is a working example in `App.js` and it imports `react-metismenu` directly from source code, that's why there is no need to build it while developing. Similarly less folder is imported directly through less compiler pipe.

#### To run dev server,
```sh
npm run dev-server
```
And open `localhost:8080` in browser.
Dev server uses webpack and it has hot modul replecament plugins, so when you change and save any source file, it will rebuild virtual bundle and send signal browser to refresh page automaticly.

#### Source Code Writing Standarts
For source code quality, I applied Airbnb rules. Because it focuses on React more than others.


#### Other scripts,
```sh
# Builds js dist file
npm run build-dist-js

# Builds minified js dist file
npm run build-dist-min-js

# Builds all dist files
npm run build-dist

# Lints js files according to Airbnb rules using Eslint
npm run lint-confs
npm run lint-src
npm run lint-dev

# Runs unit test using Jest
npm run unit-test

# Runs all necessary test scripts
npm test
```
