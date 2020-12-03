import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Payments from './Payments';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:

                // <a></a> Tags are necessary when directing to a different domain (i.e. Google).
                // We would use a <Link> tag if we intend to nagivate around our own domain via React Router.

                return <li><a href="/auth/google">Login With Google</a></li>;
            default: 
                return  [
                    <li><Payments /></li>,
                    <li><a href="/api/logout">Logout</a></li>
                ];
        }

    }
    
    render() {

        console.log(this.props);

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >
                        Andrew Weith
                    </Link>
                    <ul className="right">
                        
                        {this.renderContent()} 
                        
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);