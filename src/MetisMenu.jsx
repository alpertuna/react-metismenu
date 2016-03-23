import React, {Component} from 'react'
import Container from './Container.jsx'

class MetisMenu extends Component{
    render(){
        return <div className="metismenu">
            <Container {...this.props} className="metismenu" />
        </div>
    }
}

export default MetisMenu;
