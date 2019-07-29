import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:1997/products')
      .then((res) => {
        console.log(res.data)
      })
  }

  render() {
    return (
      <div>
        <h1>Selamat datang di Popok Kece!</h1>
      </div>
    )
  }
}

export default App;