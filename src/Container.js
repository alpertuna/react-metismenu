import React, {Component} from 'react'
import Item from './Item'

class Container extends Component{
    closeChildContainers(senderIndex){
        for(var i in this.refs){
            if(i==senderIndex) continue;
            this.refs[i].closeContainer();
        }
    }
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
