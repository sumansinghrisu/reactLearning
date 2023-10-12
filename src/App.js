import './App.css';
import React from 'react';
import Footer from "../src/components/Footer/Footer";
import Home from "../src/components/Home/Home";
import FunctionalComponet from '../src/components/FuntionalComponent';
import ClassComponent from './components/ClassCompoent';

import ErrorPage from './error-page';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseStateHook from "./components/AllHooks/UseStateHook";
import UseEffectHook from "./components/AllHooks/UseEffectHook";
import UseMemoHook from './components/AllHooks/UseMemoHook';
import UseCallbackHook from './components/AllHooks/UseCallbackHook';
import UseRefHook from './components/AllHooks/UseRefHook';
import UseContextHook from './components/AllHooks/UseContextHook';
import UseReducerHook from './components/AllHooks/UseReducerHook';
import UseImperativeHandleHook from './components/AllHooks/UseImperativeHandleHook';
import UseLayoutEffectHook from './components/AllHooks/UseLayoutEffectHook';
import LazyLoading from './components/LazyLoading/LazyLoading';
import ReactMemo from './components/ReactMemo/ReactMemo';
import LifeCycleHook from './components/LifeCycleHook/LifeCycleHook';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Navigation />
          <div className="routes-container">
            <Routes>
              <Route index element={<Home />} />
              <Route path="functional-component" element={<FunctionalComponet />} />
              <Route path="class-component" element={<ClassComponent />} />
              <Route path="/hooks/useState-hooks" element={<UseStateHook />} />
              <Route path="/hooks/useEffect-hooks" element={<UseEffectHook />} />
              <Route path="/hooks/useMemo-hooks" element={<UseMemoHook />} />
              <Route path="/hooks/useCallback-hooks" element={<UseCallbackHook/>} />
              <Route path="/hooks/useRef-hooks" element={<UseRefHook />} />
              <Route path="/hooks/useContext-hooks" element={<UseContextHook />} />
              <Route path="/hooks/useReducer-hooks" element={<UseReducerHook />} />
              <Route path="/hooks/useImperativeHandle-hooks" element={<UseImperativeHandleHook />} />
              <Route path="/hooks/useLayoutEffect-hooks" element={<UseLayoutEffectHook />} />
              <Route path="/lazy-loading" element={<LazyLoading />} />
              <Route path="/react-memo" element={<ReactMemo />} />
              <Route path="/lifecycle-hooks" element={<LifeCycleHook />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
