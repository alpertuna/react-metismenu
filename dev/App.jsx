/*
 * dev/App.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 21.08.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import MetisMenu from '../src';

// Embeds styles
import '../less/standart.less';

const menu1 = [
  {
    id: 1,
    icon: 'dashboard',
    label: 'Menu 1',
    to: '#menu-1',
  },
  {
    id: 2,
    icon: 'bell',
    label: 'Menu 2',
    to: '#menu-2',
  },
  {
    id: 3,
    icon: 'bolt',
    label: 'Menu 3',
    content: [
      {
        id: 4,
        icon: 'bolt',
        label: 'Test',
        to: '#test',
      },
    ],
  },
  {
    id: 5,
    icon: 'bars',
    label: 'Menu 4',
    content: [
      {
        id: 6,
        icon: 'bold',
        label: 'Sub Menu 1',
        to: '#sub-menu-1',
      },
      {
        id: 7,
        icon: 'italic',
        label: 'Sub Menu 2',
        content: [
          {
            id: 8,
            icon: 'cog',
            label: 'Level 3 Menu 1',
            to: '#level-3-menu-1',
          },
          {
            id: 9,
            icon: 'group',
            label: 'Level 3 Menu 2',
            to: '#level-3-menu-2',
          },
        ],
      },
      {
        id: 10,
        icon: 'image',
        label: 'Sub Menu 3',
        content: [
          {
            id: 11,
            icon: 'cog',
            label: 'Level 3 Menu 3',
            to: '#level-3-menu-3',
          },
          {
            id: 12,
            icon: 'group',
            label: 'Level 3 Menu 4',
            to: '#level-3-menu-4',
          },
        ],
      },
      {
        id: 13,
        icon: 'check',
        label: 'Sub Menu 4',
        to: '#sub-menu-4',
      },
    ],
  },
  {
    id: 14,
    icon: 'external-link',
    label: 'External Link',
    externalLink: true,
    to: 'https://www.google.com',
  },
];

const menu2 = [
  {
    id: 1,
    icon: 'bolt',
    label: 'Menu 3',
  },
  {
    id: 2,
    parentId: 1,
    icon: 'bolt',
    label: 'Test',
    to: '#test',
  },
  {
    id: 3,
    icon: 'bars',
    label: 'Menu 4',
  },
  {
    id: 4,
    parentId: 3,
    icon: 'bold',
    label: 'Sub Menu 1',
    to: '#sub-menu-1',
  },
  {
    id: 5,
    parentId: 3,
    icon: 'image',
    label: 'Sub Menu 2',
  },
  {
    id: 6,
    parentId: 5,
    icon: 'cog',
    label: 'Level 3 Menu 1',
    to: '#level-3-menu-1',
  },
  {
    id: 7,
    parentId: 5,
    icon: 'group',
    label: 'Level 3 Menu 2',
    to: '#level-3-menu-2',
  },
];


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: menu1,
    };
  }
  render() {
    return (
      <div>
        <MetisMenu
          ref={(r) => { this.menu = r; }}
          activeLinkFromLocation
          activeLinkLabel={this.state.activeLinkLabel}
          activeLinkId={this.state.activeLinkId}
          classNameItemHasVisibleChild="open"
          className="menu"
          onSelected={(e) => {
            /* e.preventDefault();
            console.log('onSelected', e);*/
          }}
          content={this.state.menu}
        />

        <div className="body">
          <h1>react-metismenu@1.1.1</h1>
          <h3>Examples to Change Active Link</h3>
          <p>
            Activate link with ref using <b>changeActiveLinkLabel</b> method
            <br />
            <button
              onClick={() => {
                this.menu.changeActiveLinkLabel('Test');
              }}
            >
              Test
            </button>
          </p>

          <p>
            Activate link with ref using <b>changeActiveLinkTo</b> method
            <br />
            <button
              onClick={() => {
                this.menu.changeActiveLinkTo('#level-3-menu-4');
              }}
            >
              #level-3-menu-4
            </button>
          </p>

          <p>
            Activate link with state using <b>activeLinkLabel</b> prop*
            <br />
            <button
              onClick={() => {
                this.setState({ activeLinkId: null, activeLinkLabel: 'Sub Menu 1' });
              }}
            >
              Sub Menu 1
            </button>
          </p>

          <p>
            Activate link with state using <b>activeLinkId</b> prop*
            <br />
            <button
              onClick={() => {
                this.setState({ activeLinkId: 2, activeLinkLabel: null });
              }}
            >
              2 (Menu 2 Id)
            </button>
          </p>

          <p>
            Also after selecting a link, you can refresh browser.
            In this case, it will automatically activates link matched
            location thanks to <b>activeLinkFromLocation</b> prop*.
          </p>

          <h3>Example to Change Content</h3>
          <p>
            Toggles content between two similar menu objects with state
            using <b>content</b> prop. (*Keeps active link, only if
            active link set as prop)
            <br />
            <button
              onClick={() => {
                this.setState(this.state.menuToggle
                  ? { menuToggle: false, menu: menu1 }
                  : { menuToggle: true, menu: menu2 },
                );
              }}
            >
              Toggle Content
            </button>
          </p>

          <br />

          <h3>Fixed Menu Style</h3>
          <p>
            <code>react-metismenu</code> default wrapper <code>display</code>
            style is <code>block</code>.
            To make menu looks like this, you should add some style manually;
          </p>
          <pre>
            <code>{`
.metismenu {
  position: fixed;
  width: 280px;

  bottom: 0;
  left: 0;
  top: 0;
}
            `}</code>
          </pre>

        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
