import React, { Component } from 'react';

class Nav extends Component {
    render(){
        return (
            <div class="ui secondary pointing menu">
                <a class="active item">
                    Home
                </a>
                <a class="item">
                    New Question
                </a>
                <a class="item">
                    Leader Board
                </a>
                <div class="right menu">
                    <a class="ui item">
                        Logout
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;
