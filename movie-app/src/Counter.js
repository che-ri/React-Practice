import React, { Component } from 'react'

export class Counter extends Component {
    state={
        count:0,
    }
    onClickPlus=()=>this.setState({count:this.state.count+1})
    
    onClickMinus=()=>this.setState({count:this.state.count-1})
    

    render() {
        return (
            <div>
                <h1>The Count is : {this.state.count}</h1>
                <div>
                    <button onClick={this.onClickPlus}>plus</button>
                    <button onClick={this.onClickMinus}>minus</button>
                </div>
            </div>
        )
    }
}

export default Counter
