import React from 'react';
class Counter extends React.Component {
    componentDidMount() {
        console.log('App is running first time'); // Inialize when app run first time
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.number !== this.props.number) {
            console.log('componentDidUpdate will run'); // When props or state will change it'll run
        }
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount runs...'); // when component switch to another component or close
    }
    render() {
        return <h1>{this.props.number}</h1>
    }
}
export default Counter;
