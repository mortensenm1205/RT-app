import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RT from './containers/RT-App/RT-App';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <RT />
        </div>
      </Router>
    );
  }
}

export default App;
