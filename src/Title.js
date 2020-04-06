import React, { Component } from 'react';

class Title extends Component {
    render () {
        return (
            <div>
                <h1 className ='title'>
                    What's the Weather?
                </h1>
                <h2>
                    Enter you zip below
                </h2>
            </div>
        )
    }
}

export default Title;