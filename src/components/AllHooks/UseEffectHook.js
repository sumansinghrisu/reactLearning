import React, { useContext, useEffect, useState } from "react";
import "../../App.css"
import "./Hooks.css";
import UseContextHook from "./UseContextHook";

export default function UseEffectHook() {
    let [count, setCount] = useState(0);
   
    // const {count, setCount} = useContext(UseContextHook);
    function increaseValue() {
        setCount(count+1);
        console.log(count); // give -1
    }
    const decreaseValue = () => {
        setCount(count - 1);
    }
    // It call only once when it's [], but when we pass any param
    // to check then it'll check for update
    useEffect(() => {
        console.log("I'm run only once");
        // setCount(5);
        return () => {
            console.log('Ran..')
        }
    }, [count]);

    return (
        <>
            <button onClick={increaseValue}>Count+ {count}</button> &nbsp;
            <button onClick={decreaseValue}>Count- {count}</button>
        </>
    )
}