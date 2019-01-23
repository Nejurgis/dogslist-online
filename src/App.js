import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
// import DogsList from './components/DogsList'
import DogsListContainer from './components/DogsListContainer'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component = {DogsListContainer} />
        <Route path ="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </main>
    );
  }
}

export default App;
