/*
 * dev/App.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 21.08.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import MetisMenu from '../src/main.js';

const App = () => {
  const menu = [
    {
      icon: 'dashboard',
      label: 'Menu 1',
      to: '#menu-1',
    },
    {
      icon: 'bell',
      label: 'Menu 2',
      to: '#menu-2',
    },
    {
      icon: 'bolt',
      label: 'Menu 3',
      content: [
        {
          icon: 'bolt',
          label: 'Test',
          to: '#test',
        },
      ],
    },
    {
      icon: 'bars',
      label: 'Menu 4',
      content: [
        {
          icon: 'bold',
          label: 'Sub Menu 1',
          to: '#sub-menu-1',
        },
        {
          icon: 'italic',
          label: 'Sub Menu 2',
          content: [
            {
              icon: 'cog',
              label: 'Level 3 Menu 1',
              to: '#level-3-menu-1',
            },
            {
              icon: 'group',
              label: 'Level 3 Menu 2',
              to: '#level-3-menu-2',
            },
          ],
        },
        {
          icon: 'image',
          label: 'Sub Menu 3',
          content: [
            {
              icon: 'cog',
              label: 'Level 3 Menu 1',
              to: '#level-3-menu-1',
            },
            {
              icon: 'group',
              label: 'Level 3 Menu 2',
              to: '#level-3-menu-2',
            },
          ],
        },
        {
          icon: 'check',
          label: 'Sub Menu 4',
          to: '#sub-menu-4',
        },
      ],
    },
    {
      icon: 'external-link',
      label: 'External Link',
      externalLink: true,
      to: 'https://www.google.com',
    },
  ];

  return (
    <div>
      <MetisMenu
        content={menu}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
