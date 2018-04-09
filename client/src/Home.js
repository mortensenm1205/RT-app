import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
    return (
      <Router>
        <div>
          <MovieList data={this.state.data} />
          <Route path={'/user'} render={() => (
            <h2>Hello</h2>
          )}/>
        </div>
      </Router>
    );
  }
}

class MovieList extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/user');
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((apiData) => {
          return (
            <div>
              <button onClick={this.handleClick}>
                <h3>{apiData.title}</h3>
              </button>
              <p>Overview: {apiData.overview}</p>
              <p>Popularity: {apiData.popularity}</p>
            </div>
          )
        })}
      </div>
    )
  }
}


export default Home;
