# react-metismenu
A ready-to-use menu component for react


INSTALL
=======

```sh
npm install react-metismenu
```
In your project you may use `--save` or `--save-dev` options of npm

USAGE
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

PROPERTIES
==========
MetisMenu (React component) properties

* `iconClassPrefix` {string} - Prefix for all icon's style class (Default `fa fa-`)
* `iconLevelDown` {string} - Icon class name for state of collapsed sub menus (Default `caret-left`)
* `iconLevelUp` {string} - Icon class name for state of opened sub menus (Default: `caret-down`)
* `content` {Object[]} - It keeps all recursive structure of Metismenu

Properties for each item in content
* `icon` {string} - Icon class name of item
* `label` {string} - Label of item
* `href` {string} - Link of item (if item has submenu, href property will be ignored)
* `content` {Object[]} - Submenu of item

EXAMPLE
=======

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import MetisMenu from 'react-metismenu'

var content=[
    {
        icon: 'icon-class-name',
        label: 'Label of Item',
        href: 'link/of/item'
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                href: 'link/of/item'
            }
        ]
    },
];

ReactDOM.render(<MetisMenu content={content} />,document.getElementById('root'));
```
