
import React from "react";
import ReactDOM from 'react-dom'
import Counter from "./Counter";

export default class App3 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mount: true,
            ignoreProp: 0
        }
        this.mountCounter = () => this.setState({mount: true})
        this.unmountCounter = () => this.setState({mount: false})
        this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
        this.seedGenerator = () => this.setState({number: Number.parseInt(Math.random()) })

    }
render() {
    return <div>
        <button onClick = {this.mountCounter} disabled = {this.state.mount}>Mount Counter </button>
        <button onClick = {this.unmountCounter} disabled = {!this.state.mount}>Unmount Counter</button>
       <button onClick = {this.ignoreProp}>Ignore Prop </button>
       <button onClick={this.seedGenerator}> Generate Seed </button>
       {this.state.mount ? 
       <Counter
       ignoreProp={this.state.ignoreProp}
       seed = {this.state.seed}
       /> : 
       null}
    </div>
}
}