import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './main.css';
import NewApp from './NewApp'


class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: 'Sergay',
            success: true
        }
    }

    toggleSucess = () => {
        this.setState({
            ...this.state,
            success: !this.state.success
        })
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p className="App-link">
            Hello world<code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
		<NewApp name={this.state.name} success={this.state.success} toggleSucessFunc={this.toggleSucess}/>
      </div>
    );
  }
}

export default App;
