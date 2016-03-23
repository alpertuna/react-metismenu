/*
 * src/MetisMenu.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 23.03.2016
 */

import React, {Component} from 'react'
import Container from './Container'

/** Main container of metismenu */
class MetisMenu extends Component{
    /**
     * Renders component
     * @return Object React component
     */
    render(){
        return <div className="metismenu">
            <Container {...this.props} className="metismenu" />
        </div>
    }
}

export default MetisMenu;
