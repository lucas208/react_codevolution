import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        /*return this.state.isLoggedIn ? <div>Welcome Lucas</div> : <div>Welcome Gest</div>*/
        return this.state.isLoggedIn && <div>Welcome Lucas</div>
    }
}

export default UserGreeting
