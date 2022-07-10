import React, {Component} from 'react';
import Header from "./layout/Header";
import Main from "./layout/Main";

class App extends Component {


  render() {
    return <div className='App'>
      <Header/>
      <Main/>
    </div>
  }
}

export default App

