/*
 * src/Item.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 23.03.2016
 */

import React, {Component} from 'react'
import Container from './Container'

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
     * @return Object React component
     */
    render(){
        var thisHasLevel = this.hasLevel();
        var iconClassPrefix = this.props.iconClassPrefix || 'fa fa-';
        if(thisHasLevel){
            var iconLevelDown = this.props.iconLevelDown || 'caret-left';
            var iconLevelUp = this.props.iconLevelUp || 'caret-down';
            var iconLevel = this.state.containerVisibility ? iconLevelUp : iconLevelDown ;
        }

        return <li className="metismenu-item">
            <a
                href={thisHasLevel ? 'javascript:void(0);' : this.props.href}
                onClick={thisHasLevel ? this.toggleContainer.bind(this) : false}
            >
                <span className={'metismenu-icon '+iconClassPrefix+this.props.icon} />
                {this.props.label}
                {thisHasLevel && <span className={'metismenu-iconlevel '+iconClassPrefix+iconLevel} />}
            </a>
            {thisHasLevel && <Container
                ref="container"
                visible={this.state.containerVisibility}
                content={this.props.content}
            />}
        </li>
    }
}

export default Item;
