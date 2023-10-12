/**  Class Component: ******************************************************************************************
State and Lifecycle Methods: Before React 16.8, if you needed to use local 
state or lifecycle methods, you had to use a class component.

Component Subclassing: Class components can extend other class components, inheriting their 
behavior. This is discouraged in modern React development in favor of composition.

More Boilerplate: Class components require more code. For example, you need to use this to 
access props, state, and class methods.

Less Intuitive for Beginners: The use of this, constructor, and other OOP concepts might be 
confusing for beginners.

No Hooks: You cannot use Hooks inside class components. This can lead to a mix of approaches 
in a codebase if both class and functional components are being used.

*/

import React from "react"
export default class ClassComponent extends React.Component {
    render() { return (<h1> Hey i am class Componet </h1>) };
}

// export default ClassComponent