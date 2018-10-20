import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render(){
        const { authUser } = this.props; 
        return (
            <nav>
                <div className='ui secondary pointing menu'>
                        <NavLink to='/' exact className='item' activeClassName='active'>
                            Home
                        </NavLink>
                        <NavLink to='/leaderboard' className='item' activeClassName='active'>
                            Leaderboard
                        </NavLink>
                        <NavLink to='/new-question' className='item' activeClassName='active'>
                            New Question
                        </NavLink>

                    <div className='right menu'>
                        <span className='item'>
                            Hello, Auth User
                        </span>
                        <div className='item'>
                            <button className='ui button secondary basic'>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect()(Nav);
