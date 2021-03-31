import React, { Component } from "react";
import "./tomato-box.css";
import withCounter from "../HOC/withCounter"

class TomatoBox extends Component{
    render(){
        return(
            <div onClick={this.props.incrementCounter} className="tomatobox">
                {this.props.counter}
            </div>
        )
    }
}
export default withCounter(TomatoBox);