
import React from 'react';
export default function Debounce() {
    //Debounce 
    const myDebounce = (cb, delay) => {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                return cb(...args);
            }, delay);
        }
    }
    const handleChange = myDebounce((e) => {
        console.log(e.target.value);
    }, 1000);
    return <input onChange={handleChange} />

}