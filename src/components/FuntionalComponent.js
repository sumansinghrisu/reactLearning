/** Functional Component: ***************************************************************
 
Simpler Syntax: They are simpler and easier to read, especially for smaller components.

State and Lifecycle with Hooks: Before React 16.8, functional components were known as 
stateless components, but with the introduction of Hooks, you can now use state, lifecycle
methods, and other features that were previously only available in class components.

Performance: Functional components can be slightly faster and less memory intensive than 
class components because they don't have the overhead of a class instance.

Automatic Cleanup with Effects: With the useEffect hook, any cleanup can be handled within 
the effect itself, making it more intuitive.

React Future: React's future improvements like concurrent mode are more optimized for functional
components.

*/
import React, { useState } from "react";

export default function FunctionalComponet() {
  let [count, setCount] = useState(0);
  
  return (
    // React.createElement('h1', null, "What's happening?")
    <>
      <h1> I'm Function Component </h1><br />
      
      <button onClick={() => setCount(count + 1)}>
        <h2>Counter: {count}</h2>
      </button> 
    </>
  );
}