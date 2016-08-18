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
import React from 'react'
import ReactDOM from 'react-dom'
import MetisMenu from 'react-metismenu'

ReactDOM.render(<MetisMenu />,document.getElementById('dom_id'));
```

Without Loaders (ES5)
```javascript
var React = require('react');
var ReactDOM = require('react-dom');
var MetisMenu = require('react-metismenu');

ReactDOM.render(
    React.createElement(MetisMenu),
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
