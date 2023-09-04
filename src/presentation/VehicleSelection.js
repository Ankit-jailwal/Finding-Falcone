import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchVehicles, toggleVehicleSelection } from "../action/actions";

function VehicleSelection({ vehicles }) {

  const dispatch = useDispatch(); 
  const selectedVehicles = useSelector((state) => state.selectedVehicles);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);



  const handleToggleVehicleSelection = (vehicle) => {
    
    dispatch(toggleVehicleSelection(vehicle)); 
  };

  return (
    <div>
      <h2>Select Space Vehicles:</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.name}>
            <label>
              <input type="checkbox" 
              name={vehicle.name} 
              checked={selectedVehicles.includes(vehicle.name)}
              onChange={() => handleToggleVehicleSelection(vehicle.name)}  
              />
              {vehicle.name} (Count: {vehicle.total_no})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleSelection;
