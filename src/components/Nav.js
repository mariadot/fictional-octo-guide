import React, { Component } from 'react';

class Nav extends Component {
    render(){
        return (
            <div className="ui secondary pointing menu">
                <a className="active item">
                    Home
                </a>
                <a className="item">
                    New Question
                </a>
                <a className="item">
                    Leader Board
                </a>
                <div className="right menu">
                    <a className="ui item">
                        Logout
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;
