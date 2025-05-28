import React from 'react';
import BreedList from './components/BreedList';
import DogFacts from './components/DogFacts';
import DogGroups from './components/DogGroups';

function App() {
  return (
    <div className="App">
      <h1>🐶 Dog API Explorer</h1>
      <BreedList />
      <DogFacts />
      <DogGroups />
    </div>
  );
}

export default App;
