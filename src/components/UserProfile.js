import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
    render(){
        return(
            <div>I'm a user</div>
        )
    }
}

export default connect()(UserProfile);