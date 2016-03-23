import React, {Component} from 'react'
import Container from './Container'

class Item extends Component{
    constructor(){
        super(...arguments);

        this.state = {
            containerVisibility: false
        }
    }

    hasLevel(){
        return typeof this.props.content != 'undefined';
    }

    isContainerClosed(){
        return !this.state.containerVisibility;
    }
    openContainer(){
        this.props.closeFriendContainers();
        this.setState({
            containerVisibility: true
        });
    }
    closeContainer(){
        if(this.hasLevel()) this.refs.container.closeChildContainers();
        this.setState({
            containerVisibility: false
        });
    }
    toggleContainer(){
        if(this.isContainerClosed()){
            this.openContainer();
        }else{
            this.closeContainer();
        }
    }

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
