import React, { Component } from 'react';
import MobileMenu from '../Menu/MobileMenu';
import {NavLink} from 'react-router-dom';

export class ResumeHeader extends Component{

    state = {
        items: [
            { name: 'Home', route: '/'},
            { name: 'Skills', route: '/skills'},
            { name: 'Projects', route: '/projects'},
            { name: 'Contact', route: '/contact'},
            { name: 'Education', route: '/edu'},
            { name: 'Experience', route: '/exp'}
        ]
        ,open: false
    }
    renderItems(){
        return this.state.items.map(item => <li><NavLink to={item.route}>{item.name}</NavLink></li>)
    }
    openSideNav = () => {
        let { open } = this.state;
        this.setState({
            open: !open
        })
    }
    render(){
        console.log('inside the render method of resume header',this.state.open);
    return (
        <div>
            
        <header>
        <div className="header-area wow fadeIn" data-wow-duration="3s">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <div className="logo">
                            <NavLink to={"/"}>
                                <img src="../../assets/images/icon/logo.png" alt="image"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-8 d-none d-lg-block">
                        <div className="main-menu">
                            <nav>
                                <ul id="navigation">
                                        {this.renderItems()}                                    
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-2 d-none d-lg-block text-right">
                        <div className="humberger" onClick={this.openSideNav}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="col-12 d-block d-lg-none">
                        <div id="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        <MobileMenu isopen={this.state.open}/>
    </div>
    );
}
};

export default ResumeHeader;