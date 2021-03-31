import React, { Component } from "react";
import "./cadet-box.css";
import withCounter from "../HOC/withCounter"    

class CadetBox extends Component {
    render(){
        return(
            <div className="cadetbox" onClick={this.props.incrementCounter}>
                {this.props.counter}
            </div>
        )
    }
}
export default withCounter(CadetBox);