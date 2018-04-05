import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  componentDidMount() {
    fetch('/home', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map((data) => {
          return (
            <div>
              <h1>{data.title}</h1>
              <p>{data.overview}</p>
            </div>  
          )
        })}
      </div>
    );
  }
}


export default App;
