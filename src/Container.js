/*
 * src/Container.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 23.03.2016
 */

import React, {Component} from 'react'
import Item from './Item'

/**
 * Item Container / Submenu Class
 *
 * Containers are levels of menu, and keep items.
 * Also provides comminication between items to close each other's sub menu levels
 *
 * Props come from top component
 * @prop {string} iconClassPrefix - Prefix for all icon's style class name
 * @prop {string} iconLevelDown - Icon name for state of collapsed containers
 * @prop {string} iconLevelUp - Icon name for state of opened containers
 *
 * Props come from parent Item
 * @prop {boolean} visible - State of container visibility
 * @prop {Object[]} content - Recursive menu stracture (It also comes from top to first container depth)
 */
class Container extends Component {
  /**
   * To close all item's submenu containers except sender item
   * @param {number} senderIndex - Index of sender menu item
   */
  closeChildContainers (senderIndex) {
    for (var i in this.refs) {
      if (i === senderIndex) continue
      this.refs[i].closeContainer()
    }
  }
  /**
   * Renders container block and menu items of it
   *
   * Also sends closeChildContainer method reference to props of items,
   * to make them able to close each others submenu container
   * when they are opened
   * @return {Object} React component
   */
  render () {
    var className = 'metismenu-container'
    if (this.props.visible) className += ' visible'

    return <ul className={className}>
      {this.props.content.map((item, i) => {
        return <Item
          key={i}
          ref={i}
          closeFriendContainers={this.closeChildContainers.bind(this, i)}
          iconClassPrefix={this.props.iconClassPrefix}
          iconLevelDown={this.props.iconLevelDown}
          iconLevelUp={this.props.iconLevelUp}
          {...item}
        />
      })}
    </ul>
  }
}

export default Container
