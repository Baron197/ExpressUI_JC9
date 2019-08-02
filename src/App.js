import React, { Component } from 'react';
import axios from 'axios';
import ManageCategory from './components/ManageCategory';

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:1997/test')
      .then((res) => {
        console.log('Masuk then')
        console.log(res.data)
      }).catch((err) => {
        console.log('terjadi error')
        console.log(err)
      })
  }
  onBtnAddClick = () => {
    axios.post('http://localhost:1997/addproduct', {
      id: 4,
      nama: 'Popok Biskuat',
      harga: 200000,
      description: 'siapkah bayi anda menjadi macan!'
    })
      .then((res) => {
          console.log(res.data)
      })
  }

  render() {
    return (
      <div>
        <h1>Selamat datang di Popok Kece!</h1>
        <input type="button" value="Add Product" onClick={this.onBtnAddClick} />
        <ManageCategory />
      </div>
    )
  }
}

export default App;