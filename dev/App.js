import React, {Component} from 'react'
import {render} from 'react-dom'
import MetisMenu from '../src/main.js'

class App extends Component {
  render () {
    var menu = [
      {
        icon: 'dashboard',
        label: 'Menu 1',
        href: '#menu-1'
      },
      {
        icon: 'bell',
        label: 'Menu 2',
        href: '#menu-2'
      },
      {
        icon: 'bolt',
        label: 'Menu 3',
        content: [
          {
            icon: 'bolt',
            label: 'Test',
            href: '#test'
          }
        ]
      },
      {
        icon: 'bars',
        label: 'Menu 4',
        content: [
          {
            icon: 'bold',
            label: 'Sub Menu 1',
            href: '#sub-menu-1'
          },
          {
            icon: 'italic',
            label: 'Sub Menu 2',
            content: [
              {
                icon: 'cog',
                label: 'Level 3 Menu 1',
                href: '#level-3-menu-1'
              },
              {
                icon: 'group',
                label: 'Level 3 Menu 2',
                href: '#level-3-menu-2'
              }
            ]
          },
          {
            icon: 'image',
            label: 'Sub Menu 3',
            content: [
              {
                icon: 'cog',
                label: 'Level 3 Menu 1',
                href: '#level-3-menu-1'
              },
              {
                icon: 'group',
                label: 'Level 3 Menu 2',
                href: '#level-3-menu-2'
              }
            ]
          },
          {
            icon: 'check',
            label: 'Sub Menu 4',
            href: '#sub-menu-4'
          }
        ]
      },
      {
        icon: 'external-link',
        label: 'External Link',
        externalLink: true,
        href: 'https://www.google.com'
      }
    ]

    return <div>
      <MetisMenu
        content={menu}
      />
    </div>
  }
}

render(<App />, document.getElementById('root'))
