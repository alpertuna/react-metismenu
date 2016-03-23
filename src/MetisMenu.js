/*
 * src/MetisMenu.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 23.03.2016
 */

import React, {Component} from 'react'
import Container from './Container'

/**
 * Main container of MetisMenu
 *
 * Props come from top component
 * @prop {string} iconClassPrefix - Prefix for all icon's style class name
 * @prop {string} iconLevelDown - Icon name for state of collapsed containers
 * @prop {string} iconLevelUp - Icon name for state of opened containers
 * @prop {Object[]} content - Recursive menu stracture
 */
class MetisMenu extends Component{
    /**
     * Renders component
     * If props are not given, it sets default props for first depth container
     * @return Object React component
     */
    render(){
        return <div className="metismenu">
            <Container
                className="metismenu"
                iconClassPrefix={this.props.iconClassPrefix || 'fa fa-'}
                iconLevelDown={this.props.iconLevelDown || 'caret-left'}
                iconLevelUp={this.props.iconLevelUp || 'caret-down'}
                content={this.props.content || []}
            />
        </div>
    }
}

export default MetisMenu;
