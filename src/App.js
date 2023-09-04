import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PlanetSelectionContainer from './container/PlanetSelectionContainer';
import VehicleSelectionContainer from './container/VehicleSelectionContainer';
import ResultContainer from './container/ResultContainer';

function App() {
  console.log("Hello")
  return (
    <Provider store={store}>
      <div>
        <h1>Find Falcone</h1>
        <PlanetSelectionContainer />
        <VehicleSelectionContainer />
        <ResultContainer />
      </div>
    </Provider>
  );
}

export default App;
