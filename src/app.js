import React, { Component } from "react";
import "./app.css"
import CadetBox from "./components/cadet-box/cadet-box";
import TomatoBox from "./components/tomato-box/tomato-box";


class App extends Component{
    render(){
        return(
            <div className="app">
                <TomatoBox />
                <CadetBox />
            </div>
        )
    }
}

export default App;