import React, { Component } from 'react';

class LifecycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        console.log('Constructor: Component is being constructed');
    }

    componentDidMount() {
        console.log('componentDidMount: Component has mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Component has updated');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component will unmount');
    }

    handleIncrement = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }

    render() {
        console.log('Render: Component is rendering');
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default LifecycleDemo;
