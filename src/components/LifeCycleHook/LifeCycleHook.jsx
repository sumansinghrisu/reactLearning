import React from "react";

export default class LifeCycleHook extends React.Component {
    // Mounting Phase
    constructor(props) {
        super(props);
        this.state = {}; // You can initialize your state here
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null; // Return null if the state shouldn't change
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    // Updating Phase
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true; // Return false if you don't want the component to re-render
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null; // Return a value or null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update');
    }

    // Unmounting Phase
    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    // Error Handling Phase
    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError');
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('Component Did Catch');
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return (
            <div className="life-cycle">
                <h1>Implementing LifeCycle Hooks</h1>
            </div>
        );
    }
}
