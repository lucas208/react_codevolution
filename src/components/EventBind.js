import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }

       // this.clickHandler = this.clickHandler.bind(this) <- o mais indicado
    }

    /* clickHandler() { <- é viável também
        this.setState({
            message: 'Goodbye!'
        })
       console.log(this)
    }
    */

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*
                    <button onClick={this.clickHandler.bind(this)}>Click</button> <- baixa Performance
                    <button onClick={() => this.clickHandler()}>Click</button> <- o mais simples
                */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
