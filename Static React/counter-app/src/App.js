// App.js
import React, { Component } from 'react';
import Button from './components/Button'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="App">
        <h2>count: {this.state.count}</h2>
        <Button title="+" task={this.incrementCount} />
        <Button title="-" task={this.decrementCount} />
      </div>
    );
  }
}

export default App;
