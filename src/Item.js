/*
 * src/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 23.03.2016
 */

import React, {Component} from 'react'
import Container from './Container'

/**
 * Menu Item Class
 *
 * Props comes from top component
 * @prop {string} iconClassPrefix - Prefix for all icon's style class name
 * @prop {string} iconLevelDown - Icon name for state of collapsed containers
 * @prop {string} iconLevelUp - Icon name for state of opened containers
 *
 * Props comes from parent Container
 * @prop {function} closeFriendContainer - Function to close peer item's container
 *
 * Props comes from menu content
 * @prop {string} icon - icon class name for item
 * @prop {string} label - label of item
 * @prop {string} href - link address of item
 * @prop {Object[]} content - Recursive menu stracture
 *
 */
class Item extends Component{
    /**
     * constructor
     * it sets first state of container's visibility
     */
    constructor(){
        super(...arguments);

        this.state = {
            containerVisibility: false
        }
    }

    /**
     * To check this item has submenu
     * @return {boolean}
     */
    hasLevel(){
        return typeof this.props.content != 'undefined';
    }

    /**
     * Returns container's visibility status
     * @return {boolean} If it's true, container is collapsed
     */
    isContainerClosed(){
        return !this.state.containerVisibility;
    }
    /*
     * Change container's visibility state to true and close peer items container
     */
    openContainer(){
        this.props.closeFriendContainers();
        this.setState({
            containerVisibility: true
        });
    }
    /*
     * Change container's visibility state to false and close submenu too
     */
    closeContainer(){
        if(this.hasLevel()) this.refs.container.closeChildContainers();
        this.setState({
            containerVisibility: false
        });
    }
    /*
     * Toggles container visibility state
     */
    toggleContainer(){
        if(this.isContainerClosed()){
            this.openContainer();
        }else{
            this.closeContainer();
        }
    }

    /*
     * Renders item and if it has level, submenu (container) of it
     * If item has sub menu, button's href link won't be applied and
     * will be added level status indicator icon to button.
     * @return {Object} React component
     */
    render(){
        var thisHasLevel = this.hasLevel();
        var iconClassName = 'metismenu-icon '+this.props.iconClassPrefix+this.props.icon;

        if(thisHasLevel){
            var href = 'javascript:void(0);';
            var onClick = this.toggleContainer.bind(this);
            var iconLevel = <span className={'metismenu-iconlevel '+this.props.iconClassPrefix + (this.state.containerVisibility ? this.props.iconLevelUp : this.props.iconLevelDown)} />
        }else{
            var href = this.props.href;
            var onClick = false;
            var iconLevel = null;
        }

        return <li className="metismenu-item">
            <a href={href} onClick={onClick}>
                <span className={iconClassName} />
                {this.props.label}
                {iconLevel}
            </a>
            {thisHasLevel && <Container
                ref="container"
                visible={this.state.containerVisibility}

                iconClassPrefix={this.props.iconClassPrefix}
                iconLevelDown={this.props.iconLevelDown}
                iconLevelUp={this.props.iconLevelUp}
                content={this.props.content}
            />}
        </li>
    }
}

export default Item;
