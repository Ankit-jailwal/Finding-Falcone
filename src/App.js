import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PlanetSelectionContainer from './PlanetSelectionContainer';
import VehicleSelectionContainer from './VehicleSelectionContainer';
import ResultContainer from './ResultContainer';

function App() {
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
