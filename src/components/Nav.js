import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { handleAuthUser } from '../actions/users';

class Nav extends Component {
    handleLogout = () =>{
        const { dispatch } = this.props;
        dispatch(handleAuthUser(''));
        this.props.history.push("/");
    }

    render(){
        const { currentUser } = this.props; 

        return (
            <nav style={{marginBottom: '20px'}}>
                <div className='ui secondary pointing menu'>
                        <NavLink to='/' exact className='item' activeClassName='active'>
                            Home
                        </NavLink>
                        <NavLink to='/leaderboard' className='item' activeClassName='active'>
                            Leaderboard
                        </NavLink>
                        <NavLink to='/add' className='item' activeClassName='active'>
                            New Question
                        </NavLink>

                    { currentUser && 
                    <div className='right menu'>
                        <span className='item'>
                            {`Hello, ${currentUser}`}
                        </span>
                        <div className='item'>
                            <button onClick={this.handleLogout} className='ui button secondary basic'>
                                Logout
                            </button>
                        </div>
                    </div> }
                </div>
            </nav>
        )
    }
}

function mapStateToProps({authUser, users}){
    const currentUser = users[authUser] ? users[authUser].name : '';
    return {
        authUser,
        users,
        currentUser: currentUser
    }
}

export default withRouter(connect(mapStateToProps)(Nav));
