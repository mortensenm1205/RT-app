import React, { Component } from 'react';

class Home extends Component {
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
        {data.map((apiData) => {
          return (
            <div>
              <h4>{apiData.title}</h4>
              <p>Overview: {apiData.overview}</p>
              <p>Popularity: {apiData.popularity}</p>
            </div>
          )
        })}
      </div>
    );
  }
}


export default Home;
