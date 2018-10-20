import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <nav className='nav'>
                <ul className='ui secondary pointing menu'>
                    <li>
                        <NavLink to='/' exact className='item' activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' className='item' activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-question' className='item' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li className='right menu'>
                        <NavLink to='/logout' className='ui item' activeClassName='active'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
