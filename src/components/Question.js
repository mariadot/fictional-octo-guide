import React, { Component } from 'react';

class Question extends Component {
    render(){
        return (
            <div>
                <div className='question ui three column stackable center aligned grid'>
                    <div className='column'>
                    <div class="ui cards">
                        <div class="card">
                            <div class="content">
                                <header class="header">
                                    <h2>User asks...</h2>
                                </header>
                            </div>
                            <div class="content">
                                <img class='ui image circular tiny left floated' src='https://lorempixel.com/output/cats-q-c-400-400-9.jpg' />  
                                    <h3>Would you rather...?</h3>
                                    <p>...be invisible...</p>
                            </div>
                            <div class="extra content">
                                <button class="ui basic green button">
                                    View poll
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;
