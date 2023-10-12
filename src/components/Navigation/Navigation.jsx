import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "../../App.css"
const Navigation = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <ul className="App-header">
            <li className={pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
            </li>
            <li className={pathname === "/functional-component" ? "active" : ""}>
                <Link to="/functional-component">Function Component</Link>
            </li>
            <li className={pathname === "/class-component" ? "active" : ""}>
                <Link to="/class-component">Class Component</Link>
            </li>
             <li className={pathname === "/lazy-loading" ? "active" : ""}>
                <Link to="lazy-loading">Lazy Loading </Link>
            </li> 
            <li className={pathname === "/react-memo" ? "active" : ""}>
                <Link to="react-memo">React Memo </Link>
            </li> 
            <li className={pathname === "/lifecycle-hooks" ? "active" : ""}>
                <Link to="lifecycle-hooks">LifeCycle Hook </Link>
            </li> 
            <li className={pathname.startsWith("/hooks") ? "active" : ""}>
                <Link>Hooks</Link>
                <ul>
                    <li className={pathname === "/hooks/useState-hooks" ? "active" : ""}>
                        <Link to="/hooks/useState-hooks">UseState</Link>
                    </li>
                    <li className={pathname === "/hooks/useEffect-hooks" ? "active" : ""}>
                        <Link to="/hooks/useEffect-hooks">UseEffect</Link>
                    </li>
                    <li className={pathname === "/hooks/useMemo-hooks" ? "active" : ""}>
                        <Link to="/hooks/useMemo-hooks">UseMemo</Link>
                    </li>
                    <li className={pathname === "/hooks/useCallback-hooks" ? "active" : ""}>
                        <Link to="/hooks/useCallback-hooks">UseCallback</Link>
                    </li>
                    <li className={pathname === "/hooks/useRef-hooks" ? "active" : ""}>
                        <Link to="/hooks/useRef-hooks">UseRef</Link>
                    </li>
                    <li className={pathname === "/hooks/useContext-hooks" ? "active" : ""}>
                        <Link to="/hooks/useContext-hooks">UseContext</Link>
                    </li>
                    <li className={pathname === "/hooks/useReducer-hooks" ? "active" : ""}>
                        <Link to="/hooks/useReducer-hooks">UseReducer</Link>
                    </li>
                    <li className={pathname === "/hooks/useImperativeHandle-hooks" ? "active" : ""}>
                        <Link to="/hooks/useImperativeHandle-hooks">useImperativeHandle</Link>
                    </li>
                    <li className={pathname === "/hooks/useLayoutEffect-hooks" ? "active" : ""}>
                        <Link to="/hooks/useLayoutEffect-hooks">UseLayoutEffectHook</Link>
                    </li>
                    <li className={pathname === "props-vs-state" ? "active" : ""}>
                        <Link to="props-vs-state">Props Vs State </Link>
                    </li>
                    {/* https://www.youtube.com/watch?v=eDK2pFQG_1k */}
                </ul>
            </li>
            <li className={pathname === "/class-component" ? "active" : ""}>
                <Link to="/class-component">New Component</Link>
            </li>
        </ul>
    );
};

export default Navigation;
