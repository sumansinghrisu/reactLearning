import React, { useState, useMemo } from 'react';

export function MyComponent(props) {
    console.log('MyComponent rendered');
    return <div>{props.data}</div>;
}

const MemoizedMyComponent = React.memo(MyComponent);

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

export default function ReactMemo() {
    const [number, setNumber] = useState(5);
    const [inc, setInc] = useState(0); // some other state

    const fact = useMemo(() => {
        console.log('Computing factorial');
        return factorial(number);
    }, [number]);

    return (
        <div>
            <MemoizedMyComponent data='React Memo' />
            <p>Factorial of {number} is {fact}</p>
            <button onClick={() => setNumber(number + 1)}>Increment Number</button>
            <button onClick={() => setInc(inc - 1)}>Increment Other State</button>
        </div>
    )
}
