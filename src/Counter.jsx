import React from "react";

/* Deliberate error component */
const ErrorComp = () => <div> {props.ignore}</div>

export default class Counter extends React.Component {
    constructor(props){
        console.log('Constructor')
        super(props)
        
        this.state = {
            counter: 0,
            seed: 0
        }
        this.increment = () => this.setState({counter: this.state.counter + 1})
        this.decrement = () => this.setState({counter: this.state.counter - 1})
    }
    /*called right after render and mounted to dom. usually used to perform side effects like
    data fetching, it runs once */
    componentDidMount(){
        console.log('Component Did Mount')
        console.log('-------------------')
    }

    /* Get Derived State From Props: allows us to copy props into state */
    static getDerivedStateFromProps(props, state){
        if (props.seed && state.seed !== props.seed){
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }
/* called before a component is rerendered. allows devs to decide if component shoudl update or not */
    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.ignoreProp && 
            this.props.ignoreProp !== nextProps.ignoreProp){
                console.log('Should Component Update Do not Render')
                console.log('-------------------------------------')
                return false
            }
            console.log('Should Component Update -- Render')
            return true 
    }
/* Allow us to capture properties not stored in state  */
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Get Snapshot Before Update')
        return null

    }

    render(){
        console.log('Render')
        if (this.state.error){
            return <div> We have encountered an error! {this.state.error}</div>
        }
        return <div>
            <button onClick={this.increment} > Increment </button> 
            <button onClick={this.decrement}  > Decrement </button>
            <div className = "counter">
                Counter: {this.state.counter}
                <ErrorComp/>
            </div>
        </div>
    }
    /* Invoked after component is updated */
componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Component Did Update')
    console.log('--------------------')
}
/* Called right before component is removed from dom, important to perfrom cleanup tasks 
such as cancelling network requests */
componentWillUnmount(prevProps, prevState, snapshot){
    console.log('Component Will Unmount')
    console.log('----------------------')

}
/* gracefully handle any errors we run into instead of blank screen */
componentDidCatch(error, info){
    console.log('Component Did Catch')
    this.setState({error, info})
}
}