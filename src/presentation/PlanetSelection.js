import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchPlanets, togglePlanetSelection } from '../action/actions'; 

function PlanetSelection({ planets }) {
  const dispatch = useDispatch(); 
  const selectedPlanets = useSelector((state) => state.selectedPlanets);

  useEffect(() => {
    dispatch(fetchPlanets()); 
  }, [dispatch]);

  const handleTogglePlanetSelection = (planet) => {
    dispatch(togglePlanetSelection(planet)); 
  };

  return (
    <div>
      <h2>Select 4 Planets:</h2>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            <label>
              <input
                type="checkbox"
                name={planet.name}
                checked={selectedPlanets.includes(planet.name)} 
                onChange={() => handleTogglePlanetSelection(planet.name)} 
              />
              {planet.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetSelection;
