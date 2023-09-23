import { useEffect } from "react";

function FLCH({number}) {
    useEffect(()=> {
        console.log('Component is updated'); // componentDidUpdate

        return () => {
            console.log('LCH componentWillUnmount run');
        }
    },[number]);
    return <><h1>Number: {number}</h1></> 
}
export default FLCH;