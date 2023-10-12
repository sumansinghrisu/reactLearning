import React, { useEffect, useState } from "react";
import "../../App.css"
import "./Hooks.css";

export default function UseStateHook() {
    let [counter, setCounter] = useState(0);
    let [counterObj, setCounterObj] = useState({
        num: 1,
        id: '1'
    });

    function increaseValue() {
        // setCounter((prev) => {prev + 1}); // best way
        setCounter(counter+1);
        console.log(counter); // give -1
    }
    const decreaseValue = () => {
        setCounter(counter - 1);
    }

    const setObjCounterAdd = () => {
        setCounterObj(prevState => ({
            ...prevState,
            num: prevState.num + 1
        }));
    }
    const setObjCounterSub = () => {
        setCounterObj(prevState => ({
            ...prevState,
            num: prevState.num - 1
        }));
    }

    // It call only once when it's [], but when we pass any param
    // to check then it'll check for update
    useEffect(() => {
        console.log("I'm run only once");
    }, [counterObj, counter]);

    return (
        <>
            <button onClick={increaseValue}>Count+ {counter}</button> &nbsp;
            <button onClick={decreaseValue}>Count- {counter}</button>

            <div className="counterObj">
                <button onClick={setObjCounterAdd}>+</button>
                <h1>{counterObj.num}</h1>
                <button onClick={setObjCounterSub}>-</button>
            </div>
        </>
    )
}

/*
export default class Hooks extends React.Component {
    constructor(props) {
        super(props)
        this.state.count = 0;
    }
    render() {
        return (
            <div>
                <h1>Hooks goes here..</h1>
                { <h3>Count {this.state.first} </h3> }
            </div>
        )
    }
}
*/