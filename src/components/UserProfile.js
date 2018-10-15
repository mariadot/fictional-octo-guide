import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
    render(){
        return(
            <div className='ui card'>
                <div className='content'>
                    <div className='header'>{this.props.id}</div>
                </div>
                <div className='extra content'>
                    Score:
                </div>
            </div>
        )
    }
}

export default connect()(UserProfile);