/*
 * src/Container.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 23.03.2016
 */

import React, {Component} from 'react'
import Item from './Item'

/**
 * Containers are levels of menu, and keep items.
 * Also provides comminication between items to close each other's sub menu levels
 */
class Container extends Component{
    /**
     * To close all item's submenu containers except sender item
     * @param {number} senderIndex - Index of sender menu item
     */
    closeChildContainers(senderIndex){
        for(var i in this.refs){
            if(i==senderIndex) continue;
            this.refs[i].closeContainer();
        }
    }
    /**
     * Renders container block (<ul>) and menu items of it (<li>)
     * Also sends closeChildContainer method reference to props of items,
     * to make them able to close each others submenu container
     * when they are opened
     * @return Object React component
     */
    render(){
        var className = 'metismenu-container';
        if(this.props.visible) className +=' visible';

        return <ul className={className}>
            {this.props.content.map((item, i) => {
                return <Item
                    key={i}
                    ref={i}
                    closeFriendContainers={this.closeChildContainers.bind(this,i)}
                    {...item}
                />
            })}
        </ul>
    }
}

export default Container;
