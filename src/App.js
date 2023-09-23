import './App.css';
import React from 'react';
import Counter from './components/Counter';
import LCH from './components/FunctionalLifeCycle';
import Debounce from './components/Debounce';

class App extends React.Component {
  state = {
    num: 0
  }
  incrementNumber() {
    this.setState((state) => ({ num: state.num + 1 }));
  }


  render() {
    return <>
      <button onClick={this.incrementNumber.bind(this)}>Increment</button>
      <div className='boxModel'>
        Box Model contain margin, padding, width, border
      </div>

      <Counter number={this.state.num} />
      <LCH number={this.state.num} />
      <Debounce />
      
    </>
  }
}

export default App;
