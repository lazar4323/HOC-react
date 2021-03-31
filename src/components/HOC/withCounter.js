import React, { Component } from "react";

const withCounter = (MainComponent) =>{
    class NewComponent extends Component {
        state={
            counter : 0
        }
        incrementCounter = () =>{
            this.setState({
                counter : this.state.counter + 1
            })
        }
        render(){
            return(
                <MainComponent counter={this.state.counter} incrementCounter={this.incrementCounter} />
            )
        }
    }
    return NewComponent;
}

export default withCounter;